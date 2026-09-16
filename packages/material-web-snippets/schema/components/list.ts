import { ComponentSchema } from './types'

/**
 * List + list item.
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/list}
 */
export const list: ComponentSchema = {
    family: 'list',
    familyPrefix: 'md-list',
    tags: [
        {
            name: 'md-list',
            description: 'Lists are continuous, vertical indexes of text and images',
            treeLabel: 'List',
        },
    ],
    baseBody: ['<md-list>', '\t${1}', '</md-list>'],
    attributes: [
    ],
}

export const listItem: ComponentSchema = {
    family: 'list-item',
    familyPrefix: 'md-list-item',
    tags: [
        {
            name: 'md-list-item',
            description: '<md-list> is a container composed of <md-list-item>s of different types.',
            treeLabel: 'List Item',
        },
    ],
    attributes: [
        {
            name: 'disabled',
            description: 'Disables the item and makes it non-selectable and non-interactive.',
            kind: 'boolean',
        },
        {
            name: 'type',
            description: 'Sets the behavior of the list item, defaults to "text". Change to "link" or "button" for interactive items.',
            kind: 'enum',
            values: [{ name: 'text' }, { name: 'link' }, { name: 'button' }],
        },
        {
            name: 'href',
            description: 'Sets the underlying HTMLAnchorElement\'s href resource attribute.',
            kind: 'string',
        },
        {
            name: 'target',
            description: 'Sets the underlying HTMLAnchorElement\'s target attribute when href is set.',
            kind: 'enum',
            values: [{ name: '_blank' }, { name: '_parent' }, { name: '_self' }, { name: '_top' }],
        },
    ],
    snippetOverrides: [
        {
            key: 'MD List Item With Slot',
            prefix: 'md-list-item:with-slot',
            body: ['<md-list-item>', '\t<div slot="start">${1}</div>', '\t<div slot="headline">${2}</div>', '\t<div slot="supporting-text">${3}</div>', '\t<div slot="end">${4}</div>', '</md-list-item>'],
        },
        {
            key: 'MD List Item Slot',
            prefix: 'md-list-item:slot',
            body: ['<div slot="${1|start,headline,supporting-text,end|}">${2}</div>'],
        },
    ],
}

export const listSchemas: ComponentSchema[] = [list, listItem]
