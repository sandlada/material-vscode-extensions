import { CssTokenWithFallback } from './types'

/**
 * Shape corner tokens, each with its fallback value.
 *
 * Source: @sandlada/material-design-css shape/variables.css
 * (plus the tailwind v4 tw.css mappings); cross-checked against
 * @sandlada/mdk build domain files for shape. Token names follow the
 * css package (with -value-); mdk-only -value-less names are not included.
 */
export const shapeTokens: CssTokenWithFallback[] = [
    { name: '--md-sys-shape-corner-value-none', fallback: '0px' },
    { name: '--md-sys-shape-corner-value-extra-small', fallback: '4px' },
    { name: '--md-sys-shape-corner-value-small', fallback: '8px' },
    { name: '--md-sys-shape-corner-value-medium', fallback: '12px' },
    { name: '--md-sys-shape-corner-value-large', fallback: '16px' },
    { name: '--md-sys-shape-corner-value-large-increased', fallback: '20px' },
    { name: '--md-sys-shape-corner-value-extra-large', fallback: '28px' },
    { name: '--md-sys-shape-corner-value-extra-large-increased', fallback: '32px' },
    { name: '--md-sys-shape-corner-value-extra-extra-large', fallback: '48px' },
    { name: '--md-sys-shape-corner-value-full', fallback: 'calc(infinity * 1px)' },
]
