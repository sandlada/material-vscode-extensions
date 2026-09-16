import { ComponentSchema } from './types'

/**
 * Item layout component (no functionality; structure for list items).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/labs/item}
 */
export const item: ComponentSchema = {
    family: 'item',
    familyPrefix: 'md-item',
    tags: [
        {
            name: 'md-item',
            description: 'An item layout component that can be used inside list items to give them their customizable structure.',
        },
    ],
    baseBody: ['<md-item>', '\t${1}', '</md-item>'],
    attributes: [
        {
            name: 'multiline',
            description: 'Only needed for SSR. Add this attribute when an item has two lines to avoid a Flash Of Unstyled Content.',
            kind: 'boolean',
        },
    ],
}

export const itemSchemas: ComponentSchema[] = [item]
