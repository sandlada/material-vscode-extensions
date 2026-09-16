import { ComponentAttr, ComponentSchema, SnippetDef } from './types'

export function titleCase(s: string): string {
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
