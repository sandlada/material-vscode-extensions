// Shared verify helpers. Throwing (not process.exit) so each package's
// verify script owns its CLI failure format.

/** JSONC parse: string-aware // comment stripping + trailing commas */
export function parseJsonc(src: string): unknown {
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

export const TABSTOP = /\$(?:\d+|\{\d+(?::[^{}]*|\|[^}]*\|)?\})/g

export function checkPlaceholders(key: string, body: string[]): void {
    for (const line of body) {
        if (line.replace(TABSTOP, '').includes('$')) throw new Error(`${key}: invalid $ usage in ${JSON.stringify(line)}`)
    }
    let depth = 0
    for (const ch of body.join('\n').replace(TABSTOP, '')) {
        if (ch === '{') depth += 1
        if (ch === '}') depth -= 1
        if (depth < 0) throw new Error(`${key}: unbalanced braces`)
    }
    if (depth !== 0) throw new Error(`${key}: unbalanced braces`)
}

export function expand(body: string[], values: Record<number, string> = {}): string[] {
    return body.map((line) =>
        line
            .replace(/\$\{(\d+)\|([^}]*)\|\}/g, (_m, n, choices) => values[Number(n)] ?? String(choices).split(',')[0])
            .replace(/\$\{(\d+):([^{}]*)\}/g, (_m, n, ph) => values[Number(n)] ?? ph)
            .replace(/\$\{(\d+)\}/g, (_m, n) => values[Number(n)] ?? '')
            .replace(/\$(\d+)/g, (_m, n) => values[Number(n)] ?? '')
    )
}

export function checkTagPair(key: string, lines: string[]): void {
    const stack: string[] = []
    for (const m of lines.join('\n').matchAll(/<\/?([a-z0-9-]+)(?:\s[^>]*)?>/g)) {
        const [whole, name] = m
        if (whole.startsWith('</')) {
            if (stack.pop() !== name) throw new Error(`${key}: mismatched close tag </${name}>`)
        } else if (!whole.endsWith('/>')) {
            stack.push(name)
        }
    }
    if (stack.length > 0) throw new Error(`${key}: unclosed tags ${stack.join(', ')}`)
}
