import * as assert from 'assert'
import * as fs from 'fs'
import * as path from 'path'
import { buildCssSnippets, parseJsonc } from 'material-snippets-tools'
import { cssTokens } from '../schema'

// Validates the WRITTEN artifact on disk (not the in-memory builder output):
// css snippet shape, prefix uniqueness, and schema coverage.
// Run: npm run verify
function packageRoot(): string {
    return path.resolve(__dirname, '..', '..')
}

function fail(msg: string): never {
    console.error(`verify FAILED: ${msg}`)
    process.exit(1)
}

function checkCssSnippetsFile(root: string): void {
    const raw = fs.readFileSync(path.join(root, 'snippets/css.code-snippets'), 'utf8')
    const data = parseJsonc(raw) as Record<string, { prefix: unknown; body: unknown; description: unknown }>
    const expected = buildCssSnippets(cssTokens)
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
    const root = packageRoot()
    try {
        checkCssSnippetsFile(root)
    } catch (e) {
        if (e instanceof assert.AssertionError) fail(e.message)
        throw e
    }
    console.log('verify: ALL CHECKS PASSED')
}

if (require.main === module) main()
