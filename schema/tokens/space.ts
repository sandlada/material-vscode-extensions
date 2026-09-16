import { CssTokenWithFallback } from './types'

/**
 * Space measurement tokens, each with its fallback value.
 *
 * Source: @sandlada/material-design-css spacing/variables.css
 * (plus the tailwind v4 tw.css mappings); cross-checked against
 * @sandlada/mdk build domain files for spacing.
 */
export const spaceTokens: CssTokenWithFallback[] = [
    { name: '--md-sys-measurement-space0', fallback: '0px' },
    { name: '--md-sys-measurement-space25', fallback: '2px' },
    { name: '--md-sys-measurement-space50', fallback: '4px' },
    { name: '--md-sys-measurement-space75', fallback: '6px' },
    { name: '--md-sys-measurement-space100', fallback: '8px' },
    { name: '--md-sys-measurement-space125', fallback: '10px' },
    { name: '--md-sys-measurement-space150', fallback: '12px' },
    { name: '--md-sys-measurement-space175', fallback: '14px' },
    { name: '--md-sys-measurement-space200', fallback: '16px' },
    { name: '--md-sys-measurement-space250', fallback: '20px' },
    { name: '--md-sys-measurement-space300', fallback: '24px' },
    { name: '--md-sys-measurement-space400', fallback: '32px' },
    { name: '--md-sys-measurement-space450', fallback: '36px' },
    { name: '--md-sys-measurement-space500', fallback: '40px' },
    { name: '--md-sys-measurement-space600', fallback: '48px' },
    { name: '--md-sys-measurement-space700', fallback: '56px' },
    { name: '--md-sys-measurement-space800', fallback: '64px' },
    { name: '--md-sys-measurement-space900', fallback: '72px' },
]
