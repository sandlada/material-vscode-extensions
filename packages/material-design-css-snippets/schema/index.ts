// Single source of truth for Material Design CSS design tokens.
// Generators in scripts/ (on the shared material-snippets-tools builders)
// derive snippets/css.code-snippets from this.
export {
    colorTokens,
    cssTokens,
    motionTokens,
    paletteTokens,
    shapeTokens,
    spaceTokens,
    typographyTokens,
} from './tokens'
export type { CssToken, CssTokenWithFallback } from './tokens/types'
