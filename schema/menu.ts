import { ComponentSchema } from './types'

/**
 * Menu family (menu, menu item, sub menu).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/menu}
 */
const corners = [{ name: 'end-start' }, { name: 'end-end' }, { name: 'start-start' }, { name: 'start-end' }]

export const menu: ComponentSchema = {
    family: 'menu',
    familyPrefix: 'md-menu',
    tags: [
        {
            name: 'md-menu',
            description: 'Menus display a list of choices on a temporary surface.',
            treeLabel: 'Menu',
        },
    ],
    baseBody: ['<md-menu>', '\t${1}', '</md-menu>'],
    attributes: [
        {
            name: 'anchor',
            description: 'The ID of the element the menu anchors to.',
            kind: 'string',
        },
        {
            name: 'positioning',
            description: 'How the menu is positioned.',
            kind: 'enum',
            values: [{ name: 'absolute' }, { name: 'fixed' }, { name: 'document' }, { name: 'popover' }],
        },
        {
            name: 'quick',
            description: 'Skips the opening and closing animations.',
            kind: 'boolean',
        },
        {
            name: 'has-overflow',
            description: 'Displays overflow content like a submenu.',
            kind: 'boolean',
        },
        {
            name: 'open',
            description: 'Opens the menu and makes it visible.',
            kind: 'boolean',
        },
        {
            name: 'x-offset',
            description: 'Offsets the menu\'s inline alignment from the anchor.',
            kind: 'string',
        },
        {
            name: 'y-offset',
            description: 'Offsets the menu\'s block alignment from the anchor.',
            kind: 'string',
        },
        {
            name: 'no-horizontal-flip',
            description: 'Disable the `flip` behavior that usually happens on the horizontal axis when the surface would render outside the viewport.',
            kind: 'boolean',
        },
        {
            name: 'no-vertical-flip',
            description: 'Disable the `flip` behavior that usually happens on the vertical axis when the surface would render outside the viewport.',
            kind: 'boolean',
        },
        {
            name: 'typeahead-delay',
            description: 'The max time between the keystrokes of the typeahead menu behavior before it clears the typeahead buffer.',
            kind: 'string',
        },
        {
            name: 'anchor-corner',
            description: 'The corner of the anchor which to align the menu in the standard logical property style of <block>-<inline>.',
            kind: 'enum',
            values: corners,
        },
        {
            name: 'menu-corner',
            description: 'The corner of the menu which to align the anchor in the standard logical property style of <block>-<inline>.',
            kind: 'enum',
            values: corners,
        },
        {
            name: 'stay-open-on-outside-click',
            description: 'Keeps the user clicks outside the menu.',
            kind: 'boolean',
        },
        {
            name: 'stay-open-on-focusout',
            description: 'Keeps the menu open when focus leaves the menu\'s composed subtree.',
            kind: 'boolean',
        },
        {
            name: 'skip-restore-focus',
            description: 'After closing, does not restore focus to the last focused element before the menu was opened.',
            kind: 'boolean',
        },
        {
            name: 'default-focus',
            description: 'The element that should be focused by default once opened.',
            kind: 'enum',
            values: [{ name: 'none' }, { name: 'list-root' }, { name: 'first-item' }, { name: 'last-item' }],
        },
        {
            name: 'no-navigation-wrap',
            description: 'Turns off navigation wrapping.',
            kind: 'boolean',
        },
    ],
}

export const menuItem: ComponentSchema = {
    family: 'menu-item',
    familyPrefix: 'md-menu-item',
    tags: [
        {
            name: 'md-menu-item',
            description: 'Menus also render menu items such as md-menu-item and handle keyboard navigation between md-menu-items as well as typeahead functionality. Additionally, md-menu interacts with md-menu-items to help you determine how a menu was closed. Listen for and inspect the close-menu custom event\'s details to determine what action and items closed the menu.',
            treeLabel: 'Menu Item',
        },
    ],
    baseBody: ['<md-menu-item>', '\t<div slot="headline">${1}</div>', '</md-menu-item>'],
    attributes: [
        {
            name: 'disabled',
            description: 'Disables the item and makes it non-selectable and non-interactive.',
            kind: 'boolean',
        },
        {
            name: 'type',
            description: 'Sets the behavior and role of the menu item, defaults to "menuitem".',
            kind: 'enum',
            values: [{ name: 'menuitem' }, { name: 'option' }, { name: 'button' }, { name: 'link' }],
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
        {
            name: 'rel',
            description: 'Sets the underlying `HTMLAnchorElement`\'s `rel` attribute when `href` is set.',
            kind: 'string',
        },
        {
            name: 'referrerpolicy',
            description: 'Sets the underlying `HTMLAnchorElement`\'s `referrerpolicy` attribute when `href` is set.',
            kind: 'string',
        },
        {
            name: 'keep-open',
            description: 'Keeps the menu open if clicked or keyboard selected.',
            kind: 'boolean',
        },
        {
            name: 'selected',
            description: 'Sets the item in the selected visual state when a submenu is opened.',
            kind: 'boolean',
        },
        {
            name: 'typeahead-text',
            description: 'The text that is selectable via typeahead. If not set, defaults to the innerText of the item slotted into the `"headline"` slot.',
            kind: 'string',
        },
    ],
}

export const subMenu: ComponentSchema = {
    family: 'sub-menu',
    familyPrefix: 'md-sub-menu',
    tags: [
        {
            name: 'md-sub-menu',
            description: 'You can compose <md-menu>s inside of an <md-sub-menu>\'s menu slot, but first the has-overflow attribute must be set on the root <md-menu> to disable overflow scrolling and display the nested submenus.',
            treeLabel: 'Sub Menu',
        },
    ],
    attributes: [
        {
            name: 'anchor-corner',
            description: 'The anchorCorner to set on the submenu.',
            kind: 'enum',
            values: corners,
        },
        {
            name: 'menu-corner',
            description: 'The menuCorner to set on the submenu.',
            kind: 'enum',
            values: corners,
        },
        {
            name: 'hover-open-delay',
            description: 'The delay between mouseenter and submenu opening.',
            kind: 'string',
        },
        {
            name: 'hover-close-delay',
            description: 'The delay between pointerleave and the submenu closing.',
            kind: 'string',
        },
    ],
    snippetOverrides: [
        {
            key: 'MD Sub Menu',
            prefix: 'md-sub-menu',
            body: ['<md-sub-menu>', '\t<md-menu-item slot="item">${1}</md-menu-item>', '\t<md-menu slot="menu">${2}</md-menu>', '</md-sub-menu>'],
        },
    ],
}

export const menuSchemas: ComponentSchema[] = [menu, menuItem, subMenu]
