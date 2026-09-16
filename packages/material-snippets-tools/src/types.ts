// Shared structural types for the snippet generators.
// Schemas in each extension package keep their own identical declarations
// (so schemas stay dependency-free); these exist so the builders in this
// package have a stable input shape. The two sides are structurally
// compatible — passing a schema object to a builder type-checks without
// importing across packages.

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
     * html-data descriptions and per-tag snippets. */
    variants?: string[]
    /** composite templates of the component's OWN structure only (e.g. its slots).
     * Cross-element/component combos (e.g. focus-ring wrapping an input) are banned:
     * each component covers only its own attrs, users compose them by hand. */
    snippetOverrides?: SnippetOverride[]
    /** escape hatch under the full-auto policy: attrs with no :variant */
    skipAutoAttrs?: string[]
}

// CSS design token model: every group carries a fallback value so
// generators can emit var(--token), var(--token, fallback) and
// value-only snippets (all directly usable as CSS values).
export interface CssTokenWithFallback {
    name: string
    fallback: string
}

/** bare token name, or a token with a fallback value for var() snippets */
export type CssToken = string | CssTokenWithFallback

export interface SnippetDef {
    prefix: string | string[]
    body: string[]
    description: string
}
