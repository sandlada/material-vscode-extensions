import * as assert from 'assert'
import * as fs from 'fs'
import * as path from 'path'
import { buildHtmlTags, buildSnippets, checkPlaceholders, checkTagPair, expand, parseJsonc } from 'material-snippets-tools'
import { components } from '../schema'

// Validates the WRITTEN artifacts on disk (not the in-memory builder output):
// file shape, snippet placeholder syntax, tabstop expansion, html-data shape,
// and schema coverage. Run: npm run verify
function packageRoot(): string {
    return path.resolve(__dirname, '..', '..')
}

function fail(msg: string): never {
    console.error(`verify FAILED: ${msg}`)
    process.exit(1)
}

function checkSnippetsFile(root: string): void {
    const raw = fs.readFileSync(path.join(root, 'snippets/snippets.code-snippets'), 'utf8')
    const data = parseJsonc(raw) as Record<string, { prefix: unknown; body: unknown; description: unknown }>
    for (const [key, def] of Object.entries(data)) {
        if (typeof def.prefix !== 'string' && !Array.isArray(def.prefix)) fail(`${key}: prefix must be string|string[]`)
        if (!Array.isArray(def.body) || def.body.some((l) => typeof l !== 'string')) fail(`${key}: body must be string[]`)
        if (typeof def.description !== 'string') fail(`${key}: description must be string`)
        try {
            checkPlaceholders(key, def.body as string[])
        } catch (e) {
            fail(e instanceof Error ? e.message : String(e))
        }
        const expanded = expand(def.body as string[])
        if (expanded.join('\n').includes('$')) fail(`${key}: unexpanded tabstop`)
        try {
            checkTagPair(key, expanded)
        } catch (e) {
            fail(e instanceof Error ? e.message : String(e))
        }
    }
    // schema coverage: every generated entry present and identical
    for (const c of components) {
        for (const [key, def] of Object.entries(buildSnippets(c))) {
            assert.deepStrictEqual(data[key], def, `${key}: file differs from generator output`)
        }
    }
    // focus-ring expansion smoke tests
    const cases: Array<[string, string[]]> = [
        ['MD Focus Ring', ['<md-focus-ring></md-focus-ring>']],
        ['MD Focus Ring For', ['<md-focus-ring for="controlId"></md-focus-ring>']],
        ['MD Focus Ring Full Properties', ['<md-focus-ring visible inward for="controlId"></md-focus-ring>']],
    ]
    for (const [key, expected] of cases) {
        assert.deepStrictEqual(expand(data[key].body as string[]), expected, `${key}: expansion mismatch`)
        try {
            checkTagPair(key, expand(data[key].body as string[]))
        } catch (e) {
            fail(e instanceof Error ? e.message : String(e))
        }
    }
    console.log(`snippets OK: ${Object.keys(data).length} entries, placeholders + expansion pass`)
}

function checkHtmlDataFile(root: string): void {
    const data = JSON.parse(fs.readFileSync(path.join(root, 'custom-data/html.html-data.json'), 'utf8')) as {
        version: unknown
        tags: Array<{ name: unknown; description: unknown; attributes?: Array<{ name: unknown; values?: Array<{ name: unknown }> }> }>
    }
    if (data.version !== 1.1) fail('html-data: version must be 1.1')
    if (!Array.isArray(data.tags) || data.tags.length === 0) fail('html-data: tags must be non-empty')
    for (const t of data.tags) {
        if (typeof t.name !== 'string' || !t.name.startsWith('md-')) fail(`html-data: bad tag name ${JSON.stringify(t.name)}`)
        if (typeof t.description !== 'string' || t.description.length === 0) fail(`html-data: ${t.name} needs a description`)
        for (const a of t.attributes ?? []) {
            if (typeof a.name !== 'string' || a.name.length === 0) fail(`html-data: ${t.name} has a nameless attribute`)
            if (a.values !== undefined && (!Array.isArray(a.values) || a.values.length === 0)) {
                fail(`html-data: ${t.name}:${a.name} values must be non-empty`)
            }
        }
    }
    // schema coverage
    for (const c of components) {
        for (const t of buildHtmlTags(c)) {
            const found = data.tags.find((x) => x.name === t.name)
            assert.deepStrictEqual(found, t, `html-data: ${t.name} differs from generator output`)
        }
    }
    console.log(`html-data OK: ${data.tags.length} tags`)
}

function main(): void {
    const root = packageRoot()
    try {
        checkSnippetsFile(root)
        checkHtmlDataFile(root)
    } catch (e) {
        if (e instanceof assert.AssertionError) fail(e.message)
        throw e
    }
    console.log('verify: ALL CHECKS PASSED')
}

if (require.main === module) main()
