import { ComponentSchema } from './types'

/**
 * Navigation tab (a destination inside a navigation bar).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/labs/navigationtab}
 */
export const navigationTab: ComponentSchema = {
    family: 'navigation-tab',
    familyPrefix: 'md-navigation-tab',
    tags: [
        {
            name: 'md-navigation-tab',
            description: 'A tab destination inside a navigation bar.',
            treeLabel: 'Navigation Tab',
        },
    ],
    attributes: [
        {
            name: 'disabled',
            description: 'Whether or not the navigation tab is disabled.',
            kind: 'boolean',
        },
        {
            name: 'active',
            description: 'Whether or not the navigation tab is active.',
            kind: 'boolean',
        },
        {
            name: 'hide-inactive-label',
            description: 'Hides the label when the tab is inactive.',
            kind: 'boolean',
        },
        {
            name: 'label',
            description: 'The text label of the navigation tab.',
            kind: 'string',
        },
        {
            name: 'badge-value',
            description: 'The value shown in the tab badge.',
            kind: 'string',
        },
        {
            name: 'show-badge',
            description: 'Whether or not to show the badge.',
            kind: 'boolean',
        },
    ],
}

export const navigationTabSchemas: ComponentSchema[] = [navigationTab]
