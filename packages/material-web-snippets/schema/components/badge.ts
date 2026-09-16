import { ComponentSchema } from './types'

/**
 * Badge.
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/labs/badge}
 */
export const badge: ComponentSchema = {
    family: 'badge',
    familyPrefix: 'md-badge',
    tags: [
        {
            name: 'md-badge',
            description: 'A badge shows a small count or status anchored to another UI element.',
        },
    ],
    attributes: [
        {
            name: 'value',
            description: 'The count or status text shown in the badge.',
            kind: 'string',
        },
    ],
}

export const badgeSchemas: ComponentSchema[] = [badge]
