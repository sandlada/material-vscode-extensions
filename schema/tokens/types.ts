// CSS design token model: every group carries a fallback value so
// generators can emit var(--token), var(--token, fallback) and
// value-only snippets (all directly usable as CSS values).
export interface CssTokenWithFallback {
    name: string
    fallback: string
}

/** bare token name, or a token with a fallback value for var() snippets */
export type CssToken = string | CssTokenWithFallback
