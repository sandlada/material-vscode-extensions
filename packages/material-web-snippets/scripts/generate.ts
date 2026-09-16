import * as fs from 'fs'
import * as path from 'path'
import { buildHtmlTags, buildMegaSnippet, buildSnippets } from 'material-snippets-tools'
import type { SnippetDef } from 'material-snippets-tools'
import { components } from '../schema'

const SNIPPETS_REL = 'snippets/snippets.code-snippets'
const HTML_DATA_REL = 'custom-data/html.html-data.json'

function packageRoot(): string {
    return path.resolve(__dirname, '..', '..')
}

function buildSnippetsFile(): string {
    const tags = components.flatMap((c) => c.tags.map((t) => t.name))
    const mega = buildMegaSnippet(tags)
    const all: Record<string, SnippetDef> = { [mega.key]: mega.def }
    for (const c of components) Object.assign(all, buildSnippets(c))
    const header = ['// GENERATED — do not edit by hand.', '// Source: schema/  |  Regenerate: npm run generate', ''].join('\n')
    return header + JSON.stringify(all, null, 2) + '\n'
}

function buildHtmlDataFile(): string {
    const tags = components.flatMap((c) => buildHtmlTags(c))
    return JSON.stringify({ version: 1.1, tags }, null, 2) + '\n'
}

function fileJobs(): Array<[string, string]> {
    return [
        [SNIPPETS_REL, buildSnippetsFile()],
        [HTML_DATA_REL, buildHtmlDataFile()],
    ]
}

function checkFiles(root: string): string[] {
    const drifted: string[] = []
    for (const [rel, content] of fileJobs()) {
        const abs = path.join(root, rel)
        const prev = fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : null
        if (prev !== content) drifted.push(rel)
    }
    return drifted
}

function writeFiles(root: string): string[] {
    const written: string[] = []
    for (const [rel, content] of fileJobs()) {
        const abs = path.join(root, rel)
        const prev = fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : null
        if (prev !== content) {
            fs.writeFileSync(abs, content)
            written.push(rel)
        }
    }
    return written
}

function printStdout(): void {
    const result: Record<string, unknown> = {}
    for (const c of components) {
        result[c.family] = {
            htmlTags: buildHtmlTags(c),
            snippets: buildSnippets(c),
        }
    }
    console.log(JSON.stringify(result, null, 2))
}

function main(): void {
    const args = process.argv.slice(2)
    const root = packageRoot()
    if (args.includes('--stdout')) {
        printStdout()
        return
    }
    if (args.includes('--check')) {
        const drifted = checkFiles(root)
        if (drifted.length > 0) {
            console.error(`generate --check FAILED, files differ from schema output: ${drifted.join(', ')}`)
            process.exit(1)
        }
        console.log('generate --check: files match schema output')
        return
    }
    const written = writeFiles(root)
    if (written.length > 0) console.log(`generate: wrote ${written.join(', ')}`)
    else console.log('generate: no changes')
}

if (require.main === module) main()
