// Single source of truth for @material/web component metadata.
// Hand-curated from node_modules/@material/web *.d.ts JSDoc + custom-elements.json tag list.
// Generators in scripts/ derive snippets / html custom-data / tree items from this.

export interface AttrValue {
    name: string
    description?: string
}

/** boolean = bare attr, string = attr="$1", enum = attr="${1|a,b|}" */
export type AttrKind = 'boolean' | 'string' | 'enum'

export interface ComponentAttr {
    /** kebab-case HTML attribute name, e.g. error-text (converted from .d.ts camelCase) */
    name: string
    description?: string
    kind: AttrKind
    /** required when kind === 'enum' */
    values?: AttrValue[]
    /** tabstop placeholder for string attrs in snippet bodies */
    placeholder?: string
}

export interface TagInfo {
    name: string
    description: string
    /** label shown in the ActivityBar tree view */
    treeLabel: string
}

export interface SnippetOverride {
    /** snippet key, e.g. "MD Dialog Alert" (component's own structure only, never cross-element) */
    key: string
    /** colon-form preferred; string[] keeps a legacy prefix working */
    prefix: string | string[]
    description?: string
    /** full replacement body, wins over auto-generated variants */
    body: string[]
}

export interface ComponentSchema {
    family: string
    /** group prefix for multi-tag families (md-button), else equals the tag */
    familyPrefix: string
    /** one entry per tag; attributes are shared across the family */
    tags: TagInfo[]
    attributes: ComponentAttr[]
    /** custom base-snippet body (default: bare open/close). In templated
     * families {variant} expands to the ${1|…|} choice; own tabstops in
     * custom bodies must then start at ${2}. */
    baseBody?: string[]
    /** tag pattern with a {variant} slot, e.g. 'md-{variant}-button'. Only for
     * families whose tags share identical attributes; family snippets then
     * use a ${1|a,b|} choice over variants. */
    tagTemplate?: string
    /** variant tokens filling {variant}; tags[] still lists every tag for
     * html-data descriptions and tree labels. */
    variants?: string[]
    /** composite templates of the component's OWN structure only (e.g. its slots).
     * Cross-element/component combos (e.g. focus-ring wrapping an input) are banned:
     * each component covers only its own attrs, users compose them by hand. */
    snippetOverrides?: SnippetOverride[]
    /** escape hatch under the full-auto policy: attrs with no :variant */
    skipAutoAttrs?: string[]
}
