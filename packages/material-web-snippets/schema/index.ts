// Single source of truth for @material/web component metadata.
// Generators in scripts/ (on the shared material-snippets-tools builders)
// derive snippets / html custom-data / tree items from this.
export { components } from './components'
export type {
    AttrValue,
    AttrKind,
    ComponentAttr,
    ComponentSchema,
    SnippetOverride,
    TagInfo,
} from './components/types'
