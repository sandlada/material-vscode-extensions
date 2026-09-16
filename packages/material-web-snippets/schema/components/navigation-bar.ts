import { ComponentSchema } from './types'

/**
 * Navigation bar.
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/labs/navigationbar}
 */
export const navigationBar: ComponentSchema = {
    family: 'navigation-bar',
    familyPrefix: 'md-navigation-bar',
    tags: [
        {
            name: 'md-navigation-bar',
            description: 'Navigation bars offer a persistent and convenient way to switch between primary destinations in an app.',
            treeLabel: 'Navigation Bar',
        },
    ],
    baseBody: ['<md-navigation-bar>', '\t${1}', '</md-navigation-bar>'],
    attributes: [
        {
            name: 'active-index',
            description: 'The index of the currently active tab.',
            kind: 'string',
        },
        {
            name: 'hide-inactive-labels',
            description: 'Whether or not to hide the labels of inactive tabs.',
            kind: 'boolean',
        },
    ],
}

export const navigationBarSchemas: ComponentSchema[] = [navigationBar]
