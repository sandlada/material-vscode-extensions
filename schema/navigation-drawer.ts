import { ComponentSchema } from './types'

/**
 * Navigation drawer family (drawer, modal drawer).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/labs/navigationdrawer}
 */
export const navigationDrawer: ComponentSchema = {
    family: 'navigation-drawer',
    familyPrefix: 'md-navigation-drawer',
    tags: [
        {
            name: 'md-navigation-drawer',
            description: 'Navigation drawers provide access to destinations in an app.',
            treeLabel: 'Navigation Drawer',
        },
    ],
    baseBody: ['<md-navigation-drawer>', '\t${1}', '</md-navigation-drawer>'],
    attributes: [
        {
            name: 'opened',
            description: 'Whether or not the drawer is opened.',
            kind: 'boolean',
        },
        {
            name: 'pivot',
            description: 'Which side the drawer pivots from.',
            kind: 'enum',
            values: [{ name: 'start' }, { name: 'end' }],
        },
    ],
}

export const navigationDrawerModal: ComponentSchema = {
    family: 'navigation-drawer-modal',
    familyPrefix: 'md-navigation-drawer-modal',
    tags: [
        {
            name: 'md-navigation-drawer-modal',
            description: 'A modal navigation drawer blocks interaction with the rest of the screen while open.',
            treeLabel: 'Navigation Drawer Modal',
        },
    ],
    baseBody: ['<md-navigation-drawer-modal>', '\t${1}', '</md-navigation-drawer-modal>'],
    attributes: [
        {
            name: 'opened',
            description: 'Whether or not the drawer is opened.',
            kind: 'boolean',
        },
        {
            name: 'pivot',
            description: 'Which side the drawer pivots from.',
            kind: 'enum',
            values: [{ name: 'start' }, { name: 'end' }],
        },
    ],
}

export const navigationDrawerSchemas: ComponentSchema[] = [navigationDrawer, navigationDrawerModal]
