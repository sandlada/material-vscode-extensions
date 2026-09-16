import { CssToken } from './types'
import { colorTokens } from './color'
import { paletteTokens } from './palette'
import { typographyTokens } from './typography'
import { shapeTokens } from './shape'
import { motionTokens } from './motion'
import { spaceTokens } from './space'

// One file per token group; register new groups here.
export { colorTokens } from './color'
export { paletteTokens } from './palette'
export { typographyTokens } from './typography'
export { shapeTokens } from './shape'
export { motionTokens } from './motion'
export { spaceTokens } from './space'
export type { CssToken, CssTokenWithFallback } from './types'

/**
 * All CSS design tokens in snippet order: colors, palette, then typography,
 * shape, motion and space. Every token carries a fallback value, so
 * generators emit var(--token), var(--token, fallback) and value-only forms.
 *
 * Previously served via contributes.css.customData; that namespace is now
 * claimed by a proposed-API CSS extension point, so tokens ship as css
 * language snippets instead (snippets/css.code-snippets).
 */
export const cssTokens: CssToken[] = [
    ...colorTokens,
    ...paletteTokens,
    ...typographyTokens,
    ...shapeTokens,
    ...motionTokens,
    ...spaceTokens,
]
