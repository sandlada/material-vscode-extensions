import { ComponentSchema } from './types'

/**
 * FAB family (fab, branded fab).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/fab}
 */
export const fab: ComponentSchema = {
    family: 'fab',
    familyPrefix: 'md-fab',
    tags: [
        {
            name: 'md-fab',
            description: 'FAB represents the most important action on a screen. It puts key actions within reach.',
        },
    ],
    attributes: [
        {
            name: 'variant',
            description: 'The FAB color variant to render.',
            kind: 'enum',
            values: [{ name: 'surface' }, { name: 'primary' }, { name: 'secondary' }, { name: 'tertiary' }],
        },
        {
            name: 'size',
            description: 'The size of the FAB.',
            kind: 'enum',
            values: [{ name: 'small' }, { name: 'medium' }, { name: 'large' }],
        },
        {
            name: 'label',
            description: 'The text to display on the FAB.',
            kind: 'string',
        },
        {
            name: 'lowered',
            description: 'Lowers the FAB\'s elevation.',
            kind: 'boolean',
        },
    ],
}

export const brandedFab: ComponentSchema = {
    family: 'branded-fab',
    familyPrefix: 'md-branded-fab',
    tags: [
        {
            name: 'md-branded-fab',
            description: 'Branded FABs use a brightly colored logo for their icon. Unlike FAB, branded FABs do not have color variants.',
        },
    ],
    attributes: [
        {
            name: 'variant',
            description: 'The FAB color variant to render.',
            kind: 'enum',
            values: [{ name: 'surface' }, { name: 'primary' }, { name: 'secondary' }, { name: 'tertiary' }],
        },
        {
            name: 'size',
            description: 'The size of the FAB. NOTE: Branded FABs cannot be sized to small.',
            kind: 'enum',
            values: [{ name: 'medium' }, { name: 'large' }],
        },
        {
            name: 'label',
            description: 'The text to display on the FAB.',
            kind: 'string',
        },
        {
            name: 'lowered',
            description: 'Lowers the FAB\'s elevation.',
            kind: 'boolean',
        },
    ],
}

export const fabSchemas: ComponentSchema[] = [fab, brandedFab]
