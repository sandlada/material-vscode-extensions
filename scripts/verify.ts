import * as assert from 'assert'
import * as fs from 'fs'
import * as path from 'path'
import { components } from '../schema'
import { cssTokens } from '../schema/tokens'
import { buildCssSnippets, buildHtmlTags, buildSnippets } from './generate'

// Validates the WRITTEN artifacts on disk (not the in-memory builder output):
// file shape, snippet placeholder syntax, tabstop expansion, html-data shape,
// and schema coverage. Run: npm run verify
function repoRoot(): string {
    return path.resolve(__dirname, '..', '..')
}

function fail(msg: string): never {
    console.error(`verify FAILED: ${msg}`)
    process.exit(1)
}

/** JSONC parse: string-aware // comment stripping + trailing commas */
function parseJsonc(src: string): unknown {
    let out = ''
    let inStr = false
    let esc = false
    let i = 0
    while (i < src.length) {
        const ch = src[i]
        if (inStr) {
            out += ch
            if (esc) esc = false
            else if (ch === '\\') esc = true
            else if (ch === '"') inStr = false
            i += 1
            continue
        }
        if (ch === '"') {
            inStr = true
            out += ch
            i += 1
            continue
        }
        if (ch === '/' && src[i + 1] === '/') {
            while (i < src.length && src[i] !== '\n') i += 1
            continue
        }
        out += ch
        i += 1
    }
    return JSON.parse(out.replace(/,(\s*[}\]])/g, (_m, b) => b))
}

const TABSTOP = /\$(?:\d+|\{\d+(?::[^{}]*|\|[^}]*\|)?\})/g

function checkPlaceholders(key: string, body: string[]): void {
    for (const line of body) {
        if (line.replace(TABSTOP, '').includes('$')) fail(`${key}: invalid $ usage in ${JSON.stringify(line)}`)
    }
    let depth = 0
    for (const ch of body.join('\n').replace(TABSTOP, '')) {
        if (ch === '{') depth += 1
        if (ch === '}') depth -= 1
        if (depth < 0) fail(`${key}: unbalanced braces`)
    }
    if (depth !== 0) fail(`${key}: unbalanced braces`)
}

function expand(body: string[], values: Record<number, string> = {}): string[] {
    return body.map((line) =>
        line
            .replace(/\$\{(\d+)\|([^}]*)\|\}/g, (_m, n, choices) => values[Number(n)] ?? String(choices).split(',')[0])
            .replace(/\$\{(\d+):([^{}]*)\}/g, (_m, n, ph) => values[Number(n)] ?? ph)
            .replace(/\$\{(\d+)\}/g, (_m, n) => values[Number(n)] ?? '')
            .replace(/\$(\d+)/g, (_m, n) => values[Number(n)] ?? '')
    )
}

function checkTagPair(key: string, lines: string[]): void {
    const stack: string[] = []
    for (const m of lines.join('\n').matchAll(/<\/?([a-z0-9-]+)(?:\s[^>]*)?>/g)) {
        const [whole, name] = m
        if (whole.startsWith('</')) {
            if (stack.pop() !== name) fail(`${key}: mismatched close tag </${name}>`)
        } else if (!whole.endsWith('/>')) {
            stack.push(name)
        }
    }
    if (stack.length > 0) fail(`${key}: unclosed tags ${stack.join(', ')}`)
}

function checkSnippetsFile(root: string): void {
    const raw = fs.readFileSync(path.join(root, 'packages/material-web-snippets/snippets/snippets.code-snippets'), 'utf8')
    const data = parseJsonc(raw) as Record<string, { prefix: unknown; body: unknown; description: unknown }>
    for (const [key, def] of Object.entries(data)) {
        if (typeof def.prefix !== 'string' && !Array.isArray(def.prefix)) fail(`${key}: prefix must be string|string[]`)
        if (!Array.isArray(def.body) || def.body.some((l) => typeof l !== 'string')) fail(`${key}: body must be string[]`)
        if (typeof def.description !== 'string') fail(`${key}: description must be string`)
        checkPlaceholders(key, def.body as string[])
        const expanded = expand(def.body as string[])
        if (expanded.join('\n').includes('$')) fail(`${key}: unexpanded tabstop`)
        checkTagPair(key, expanded)
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
        checkTagPair(key, expand(data[key].body as string[]))
    }
    console.log(`snippets OK: ${Object.keys(data).length} entries, placeholders + expansion pass`)
}

function checkHtmlDataFile(root: string): void {
    const data = JSON.parse(fs.readFileSync(path.join(root, 'packages/material-web-snippets/custom-data/html.html-data.json'), 'utf8')) as {
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

function checkCssSnippetsFile(root: string): void {
    const raw = fs.readFileSync(path.join(root, 'packages/material-design-css-snippets/snippets/css.code-snippets'), 'utf8')
    const data = parseJsonc(raw) as Record<string, { prefix: unknown; body: unknown; description: unknown }>
    const expected = buildCssSnippets()
    assert.deepStrictEqual(data, expected, 'css snippets differ from generator output')
    assert.deepStrictEqual(Object.keys(data).length, Object.keys(expected).length, 'css snippet count mismatch')
    const seen = new Map<string, string>()
    for (const [key, def] of Object.entries(data)) {
        const prefixes = Array.isArray(def.prefix) ? def.prefix : [def.prefix]
        for (const p of prefixes) {
            if (typeof p !== 'string' || p.length === 0) fail(`${key}: prefix must be a non-empty string`)
            const prev = seen.get(p)
            if (prev !== undefined) fail(`duplicate prefix ${JSON.stringify(p)} in ${prev} and ${key}`)
            seen.set(p, key)
        }
        if (key.endsWith(' with fallback') && !String(prefixes[0]).endsWith(':fallback')) {
            fail(`${key}: fallback snippet prefix must end with :fallback`)
        }
        if (key.endsWith(' value only') && !String(prefixes[0]).endsWith(':value')) {
            fail(`${key}: value-only snippet prefix must end with :value`)
        }
    }
    const fallbackCount = cssTokens.filter((t) => typeof t !== 'string').length
    console.log(`css snippets OK: ${cssTokens.length} tokens, ${Object.keys(data).length} entries (${fallbackCount} with var() fallback + value only), ${seen.size} unique prefixes`)
}

function main(): void {
    const root = repoRoot()
    checkSnippetsFile(root)
    checkHtmlDataFile(root)
    checkCssSnippetsFile(root)
    console.log('verify: ALL CHECKS PASSED')
}

if (require.main === module) main()
