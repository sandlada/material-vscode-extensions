import { ComponentSchema } from './types'

/**
 * Card family (elevated, filled, outlined). Pure containers, no attributes.
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/labs/card}
 */
export const elevatedCard: ComponentSchema = {
    family: 'elevated-card',
    familyPrefix: 'md-elevated-card',
    tags: [
        {
            name: 'md-elevated-card',
            description: 'Elevated cards display content in a container with a shadow.',
        },
    ],
    baseBody: ['<md-elevated-card>', '\t${1}', '</md-elevated-card>'],
    attributes: [
    ],
}

export const filledCard: ComponentSchema = {
    family: 'filled-card',
    familyPrefix: 'md-filled-card',
    tags: [
        {
            name: 'md-filled-card',
            description: 'Filled cards display content in a container with a fill color and no shadow.',
        },
    ],
    baseBody: ['<md-filled-card>', '\t${1}', '</md-filled-card>'],
    attributes: [
    ],
}

export const outlinedCard: ComponentSchema = {
    family: 'outlined-card',
    familyPrefix: 'md-outlined-card',
    tags: [
        {
            name: 'md-outlined-card',
            description: 'Outlined cards display content in a container with an outline border.',
        },
    ],
    baseBody: ['<md-outlined-card>', '\t${1}', '</md-outlined-card>'],
    attributes: [
    ],
}

export const cardSchemas: ComponentSchema[] = [elevatedCard, filledCard, outlinedCard]
