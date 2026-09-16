import { ComponentSchema } from './types'

/**
 * Icon (no attributes; content is the icon name, codepoint, or nested svg).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/icon}
 */
export const icon: ComponentSchema = {
    family: 'icon',
    familyPrefix: 'md-icon',
    tags: [
        {
            name: 'md-icon',
            description: 'Icons can be used to represent common actions. Material Symbols are a set of variable icon fonts created at seven weights across three different styles.',
            treeLabel: 'Icon',
        },
    ],
    baseBody: ['<md-icon>${1}</md-icon>'],
    attributes: [
    ],
}

export const iconSchemas: ComponentSchema[] = [icon]
