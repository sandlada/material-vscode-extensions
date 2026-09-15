import * as fs from 'fs'
import * as path from 'path'
import { ComponentAttr, ComponentSchema } from '../schema/types'
import { components } from '../schema'
import { cssTokens } from '../schema/css-tokens'

export interface SnippetDef {
    prefix: string | string[]
    body: string[]
    description: string
}

const SNIPPETS_REL = 'snippets/snippets.code-snippets'
const HTML_DATA_REL = 'custom-data/html.html-data.json'
const CSS_SNIPPETS_REL = 'snippets/css.code-snippets'

function titleCase(s: string): string {
    return s
        .split('-')
        .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
        .join(' ')
}

/** html.html-data.json tags entries (family expanded to one entry per tag) */
export function buildHtmlTags(comp: ComponentSchema) {
    return comp.tags.map((t) => ({
        name: t.name,
        description: t.description,
        ...(comp.attributes.length
            ? {
                  attributes: comp.attributes.map((a) => ({
                      name: a.name,
                      ...(a.description ? { description: a.description } : {}),
                      ...(a.kind === 'enum' && a.values
                          ? {
                                values: a.values.map((v) => ({
                                    name: v.name,
                                    ...(v.description ? { description: v.description } : {}),
                                })),
                            }
                          : {}),
                  })),
              }
            : {}),
    }))
}

function attrBody(tag: string, attr: ComponentAttr, tabstop: number): string {
    if (attr.kind === 'boolean') return `<${tag} ${attr.name}></${tag}>`
    if (attr.kind === 'enum') {
        const choices = (attr.values ?? []).map((v) => v.name).join(',')
        return `<${tag} ${attr.name}="\${${tabstop}|${choices}|}"></${tag}>`
    }
    const inner = attr.placeholder ? `\${${tabstop}:${attr.placeholder}}` : `\${${tabstop}}`
    return `<${tag} ${attr.name}="${inner}"></${tag}>`
}

function attrPart(attr: ComponentAttr, tabstop: number): string {
    if (attr.kind === 'boolean') return `\${${tabstop}:${attr.name}}`
    if (attr.kind === 'enum') {
        const choices = (attr.values ?? []).map((v) => v.name).join(',')
        return `${attr.name}="\${${tabstop}|${choices}|}"`
    }
    return `${attr.name}="\${${tabstop}:${attr.placeholder ?? ''}}"`
}

function expandTemplate(tagTemplate: string, variants: string[], text: string): string {
    return text.split('{variant}').join(`\${1|${variants.join(',')}|}`)
}

function autoAttrs(comp: ComponentSchema): ComponentAttr[] {
    return comp.attributes.filter((a) => !(comp.skipAutoAttrs ?? []).includes(a.name))
}

/** snippets.code-snippets entries: base + one :variant per attr + full-properties + overrides */
export function buildSnippets(comp: ComponentSchema): Record<string, SnippetDef> {
    const out: Record<string, SnippetDef> = {}
    const title = titleCase(comp.family)
    const { tagTemplate, variants } = comp
    if (tagTemplate !== undefined && variants !== undefined && variants.length > 0) {
        buildTemplatedSnippets(comp, title, tagTemplate, variants, out)
    } else {
        buildSingleSnippets(comp, title, out)
    }
    for (const o of comp.snippetOverrides ?? []) {
        out[o.key] = { prefix: o.prefix, body: o.body, description: o.description ?? '' }
    }
    return out
}

function buildSingleSnippets(comp: ComponentSchema, title: string, out: Record<string, SnippetDef>): void {
    const tag = comp.tags[0].name
    out[`MD ${title}`] = {
        prefix: comp.familyPrefix,
        body: comp.baseBody ?? [`<${tag}></${tag}>`],
        description: comp.tags[0].description,
    }
    const attrs = autoAttrs(comp)
    attrs.forEach((a) => {
        out[`MD ${title} ${titleCase(a.name)}`] = {
            prefix: `${comp.familyPrefix}:${a.name}`,
            body: [attrBody(tag, a, 1)],
            description: a.description ?? '',
        }
    })
    const parts = attrs.map((a, i) => attrPart(a, i + 1))
    out[`MD ${title} Full Properties`] = {
        prefix: `${comp.familyPrefix}:full-properties`,
        body: [`<${tag} ${parts.join(' ')}></${tag}>`],
        description: '',
    }
}

/** shared-attribute families: family-level choice snippets + per-tag plain bases */
function buildTemplatedSnippets(
    comp: ComponentSchema,
    title: string,
    tagTemplate: string,
    variants: string[],
    out: Record<string, SnippetDef>
): void {
    const expand = (text: string): string => expandTemplate(tagTemplate, variants, text)
    const open = expand(tagTemplate)
    const baseBody = (comp.baseBody ?? [`<${tagTemplate}></${tagTemplate}>`]).map(expand)
    out[`MD ${title}`] = {
        prefix: comp.familyPrefix,
        body: baseBody,
        description: comp.tags[0].description,
    }
    const attrs = autoAttrs(comp)
    attrs.forEach((a) => {
        out[`MD ${title} ${titleCase(a.name)}`] = {
            prefix: `${comp.familyPrefix}:${a.name}`,
            body: [attrBody(open, a, 2)],
            description: a.description ?? '',
        }
    })
    const parts = attrs.map((a, i) => attrPart(a, i + 2))
    out[`MD ${title} Full Properties`] = {
        prefix: `${comp.familyPrefix}:full-properties`,
        body: [`<${open} ${parts.join(' ')}></${open}>`],
        description: '',
    }
    for (const t of comp.tags) {
        out[`MD ${t.treeLabel}`] = {
            prefix: t.name,
            body: [`<${t.name}></${t.name}>`],
            description: t.description,
        }
    }
}

/** all-components discovery snippet (generated from every schema tag) */
export function buildMegaSnippet(tags: string[]): { key: string; def: SnippetDef } {
    const suffixes = tags.map((t) => t.replace(/^md-/, ''))
    const choice = `\${1|${suffixes.join(',')}|}`
    return {
        key: 'MD All Components In One',
        def: {
            prefix: 'md-components',
            body: [`<md-${choice}>`, '\t${2}', `</md-${choice}>`],
            description: 'All Material Web Components in one',
        },
    }
}

/** SnippetsTree.ts items (plain insert strings, no tabstops) */
export function buildTreeItems(comp: ComponentSchema) {
    return comp.tags.map((t) => ({ label: t.treeLabel, code: `<${t.name}></${t.name}>` }))
}

function repoRoot(): string {
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

/** snippets/css.code-snippets entries: one per system color token (body is the bare token,
 * matching the old css.customData property-name completion) */
export function buildCssSnippets(): Record<string, SnippetDef> {
    const out: Record<string, SnippetDef> = {}
    for (const token of cssTokens) {
        out[`MD CSS ${token}`] = {
            prefix: token,
            body: [token],
            description: '',
        }
    }
    return out
}

function buildCssSnippetsFile(): string {
    const header = ['// GENERATED - do not edit by hand.', '// Source: schema/css-tokens.ts  |  Regenerate: npm run generate', ''].join('\n')
    return header + JSON.stringify(buildCssSnippets(), null, 2) + '\n'
}

function fileJobs(): Array<[string, string]> {
    return [
        [SNIPPETS_REL, buildSnippetsFile()],
        [HTML_DATA_REL, buildHtmlDataFile()],
        [CSS_SNIPPETS_REL, buildCssSnippetsFile()],
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
            treeItems: buildTreeItems(c),
        }
    }
    result['css-tokens'] = {
        snippets: buildCssSnippets(),
    }
    console.log(JSON.stringify(result, null, 2))
}

function main(): void {
    const args = process.argv.slice(2)
    const root = repoRoot()
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
