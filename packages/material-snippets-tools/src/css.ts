import { CssToken, SnippetDef } from './types'

/** snippets/css.code-snippets entries: three forms per design token —
 * var() (`var(--token)`), var() with fallback (`var(--token, fallback)`),
 * and value only (`fallback`). All three bodies are directly usable as CSS
 * values. The three forms share one token name, so their prefixes use the
 * HTML-side `prefix:variant` convention to stay unique in the completion
 * list: `--token`, `--token:fallback`, `--token:value`. */
export function buildCssSnippets(tokens: CssToken[]): Record<string, SnippetDef> {
    const out: Record<string, SnippetDef> = {}
    for (const token of tokens) {
        if (typeof token === 'string') {
            out[`MD CSS ${token}`] = {
                prefix: token,
                body: [`var(${token})`],
                description: '',
            }
            continue
        }
        out[`MD CSS ${token.name}`] = {
            prefix: token.name,
            body: [`var(${token.name})`],
            description: '',
        }
        const invocation = `var(${token.name}, ${token.fallback})`
        out[`MD CSS ${token.name} with fallback`] = {
            prefix: `${token.name}:fallback`,
            body: [invocation],
            description: `Fallback: ${token.fallback}`,
        }
        out[`MD CSS ${token.name} value only`] = {
            prefix: `${token.name}:value`,
            body: [token.fallback],
            description: 'Value only',
        }
    }
    return out
}
