import * as fs from 'fs'
import * as path from 'path'
import { buildCssSnippets } from 'material-snippets-tools'
import { cssTokens } from '../schema'

const CSS_SNIPPETS_REL = 'snippets/css.code-snippets'

function packageRoot(): string {
    return path.resolve(__dirname, '..', '..')
}

function buildCssSnippetsFile(): string {
    const header = ['// GENERATED - do not edit by hand.', '// Source: schema/tokens/  |  Regenerate: npm run generate', ''].join('\n')
    return header + JSON.stringify(buildCssSnippets(cssTokens), null, 2) + '\n'
}

function fileJobs(): Array<[string, string]> {
    return [[CSS_SNIPPETS_REL, buildCssSnippetsFile()]]
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
    console.log(JSON.stringify({ 'css-tokens': { snippets: buildCssSnippets(cssTokens) } }, null, 2))
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
