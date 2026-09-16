// Single source of truth, split into components/ and tokens/.
// Generators in scripts/ derive all artifacts from this.
export { components } from './components'
export type {
    AttrValue,
    AttrKind,
    ComponentAttr,
    ComponentSchema,
    SnippetOverride,
    TagInfo,
} from './components/types'
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
