import { ComponentSchema } from './types'

/**
 * Tabs family (tabs bar + primary/secondary tabs).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/tabs}
 */
export const tabs: ComponentSchema = {
    family: 'tabs',
    familyPrefix: 'md-tabs',
    tags: [
        {
            name: 'md-tabs',
            description: 'Tabs organize groups of related content that are at the same level of hierarchy.',
            treeLabel: 'Tabs',
        },
    ],
    baseBody: ['<md-tabs>', '\t${1}', '</md-tabs>'],
    attributes: [
        {
            name: 'auto-activate',
            description: 'Whether or not to automatically select a tab when it is focused.',
            kind: 'boolean',
        },
        {
            name: 'active-tab-index',
            description: 'The index of the currently active tab.',
            kind: 'string',
        },
    ],
    snippetOverrides: [
        {
            key: 'MD Tabs Tab Panel',
            prefix: 'md-tabs:tab-panel',
            body: ['<md-tabs>', '\t<md-primary-tab id="${1:tabId}" aria-controls="${1:tabId}-panel">${2}</md-primary-tab>', '</md-tabs>', '<div id="${1:tabId}-panel" role="tabpanel" aria-labelledby="${1:tabId}-tab">', '\t${3}', '</div>'],
        },
    ],
}

export const primaryTab: ComponentSchema = {
    family: 'primary-tab',
    familyPrefix: 'md-primary-tab',
    tags: [
        {
            name: 'md-primary-tab',
            description: 'Primary tabs are placed at the top of the content pane under a top app bar. They display the main content destinations.',
            treeLabel: 'Primary Tab',
        },
    ],
    attributes: [
        {
            name: 'inline-icon',
            kind: 'boolean',
        },
        {
            name: 'active',
            description: 'Whether or not the tab is selected.',
            kind: 'boolean',
        },
        {
            name: 'has-icon',
            description: 'In SSR, set this to true when an icon is present.',
            kind: 'boolean',
        },
        {
            name: 'icon-only',
            description: 'In SSR, set this to true when there is no label and only an icon.',
            kind: 'boolean',
        },
    ],
}

export const secondaryTab: ComponentSchema = {
    family: 'secondary-tab',
    familyPrefix: 'md-secondary-tab',
    tags: [
        {
            name: 'md-secondary-tab',
            description: 'Secondary tabs are used within a content area to further separate related content and establish hierarchy.',
            treeLabel: 'Secondary Tab',
        },
    ],
    attributes: [
        {
            name: 'active',
            description: 'Whether or not the tab is selected.',
            kind: 'boolean',
        },
        {
            name: 'has-icon',
            description: 'In SSR, set this to true when an icon is present.',
            kind: 'boolean',
        },
        {
            name: 'icon-only',
            description: 'In SSR, set this to true when there is no label and only an icon.',
            kind: 'boolean',
        },
    ],
}

export const tabsSchemas: ComponentSchema[] = [tabs, primaryTab, secondaryTab]
