import { ComponentSchema } from './types'

/**
 * Divider.
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/divider}
 */
export const divider: ComponentSchema = {
    family: 'divider',
    familyPrefix: 'md-divider',
    tags: [
        {
            name: 'md-divider',
            description: 'Dividers can reinforce tapability, such as when used to separate list items or define tappable regions in an accordion.',
            treeLabel: 'Divider',
        },
    ],
    attributes: [
        {
            name: 'inset',
            description: 'Indents the divider with equal padding on both sides.',
            kind: 'boolean',
        },
        {
            name: 'inset-start',
            description: 'Indents the divider with padding on the leading side.',
            kind: 'boolean',
        },
        {
            name: 'inset-end',
            description: 'Indents the divider with padding on the trailing side.',
            kind: 'boolean',
        },
    ],
}

export const dividerSchemas: ComponentSchema[] = [divider]
