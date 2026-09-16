import { ComponentSchema } from './types'

/**
 * Select family (filled, outlined) + select option.
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/select}
 */
export const select: ComponentSchema = {
    family: 'select',
    familyPrefix: 'md-select',
    tags: [
        {
            name: 'md-filled-select',
            description: 'Select menus display a list of choices on temporary surfaces and display the currently selected menu item above the menu.',
            treeLabel: 'Filled Select',
        },
        {
            name: 'md-outlined-select',
            description: 'Select menus display a list of choices on temporary surfaces and display the currently selected menu item above the menu.',
            treeLabel: 'Outlined Select',
        },
    ],
    tagTemplate: 'md-{variant}-select',
    variants: ['filled', 'outlined'],
    baseBody: ['<md-{variant}-select>', '\t${2}', '</md-{variant}-select>'],
    attributes: [
        {
            name: 'quick',
            description: 'Opens the menu synchronously with no animation.',
            kind: 'boolean',
        },
        {
            name: 'required',
            description: 'Whether or not the select is required.',
            kind: 'boolean',
        },
        {
            name: 'disabled',
            description: 'Disables the select.',
            kind: 'boolean',
        },
        {
            name: 'error-text',
            description: 'The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.',
            kind: 'string',
        },
        {
            name: 'label',
            description: 'The floating label for the field.',
            kind: 'string',
        },
        {
            name: 'no-asterisk',
            description: 'Disables the asterisk on the floating label, when the select is required.',
            kind: 'boolean',
        },
        {
            name: 'supporting-text',
            description: 'Conveys additional information below the select, such as how it should be used.',
            kind: 'string',
        },
        {
            name: 'error',
            description: 'Gets or sets whether or not the select is in a visually invalid state.',
            kind: 'boolean',
        },
        {
            name: 'menu-positioning',
            description: 'Whether or not the underlying md-menu should be position: fixed to display in a top-level manner, or position: absolute.',
            kind: 'enum',
            values: [{ name: 'absolute' }, { name: 'fixed' }, { name: 'popover' }],
        },
        {
            name: 'clamp-menu-width',
            description: 'Clamps the menu-width to the width of the select.',
            kind: 'boolean',
        },
        {
            name: 'typeahead-delay',
            description: 'The max time between the keystrokes of the typeahead select / menu behavior before it clears the typeahead buffer.',
            kind: 'string',
        },
        {
            name: 'has-leading-icon',
            description: 'Whether or not the text field has a leading icon. Used for SSR.',
            kind: 'boolean',
        },
        {
            name: 'display-text',
            description: 'Text to display in the field. Only set for SSR.',
            kind: 'string',
        },
        {
            name: 'menu-align',
            description: 'Whether the menu should be aligned to the start or the end of the select\'s textbox.',
            kind: 'enum',
            values: [{ name: 'start' }, { name: 'end' }],
        },
        {
            name: 'value',
            description: 'The value of the currently selected option.',
            kind: 'string',
        },
        {
            name: 'selected-index',
            description: 'The index of the currently selected option.',
            kind: 'string',
        },
        {
            name: 'name',
            description: 'The HTML name to use in form submission.',
            kind: 'string',
        },
        {
            name: 'form',
            description: 'The ID of the form to associate the select with.',
            kind: 'string',
        },
    ],
}

export const selectOption: ComponentSchema = {
    family: 'select-option',
    familyPrefix: 'md-select-option',
    tags: [
        {
            name: 'md-select-option',
            description: 'Select (also referred to as a dropdown menu) allows choosing a value from a fixed list of available options. It is analogous to the native HTML <select> element.',
            treeLabel: 'Select Option',
        },
    ],
    attributes: [
        {
            name: 'disabled',
            description: 'Disables the item and makes it non-selectable and non-interactive.',
            kind: 'boolean',
        },
        {
            name: 'selected',
            description: 'Whether or not the SelectOption is selected.',
            kind: 'boolean',
        },
        {
            name: 'value',
            description: 'The form value associated with the Select Option.',
            kind: 'string',
        },
        {
            name: 'typeahead-text',
            description: 'The text that is selectable via typeahead. If not set, defaults to the innerText of the item slotted into the `"headline"` slot.',
            kind: 'string',
        },
        {
            name: 'display-text',
            description: 'The text that is displayed in the select field when selected. If not set, defaults to the textContent of the item slotted into the `"headline"` slot.',
            kind: 'string',
        },
    ],
    snippetOverrides: [
        {
            key: 'MD Select Option Slot',
            prefix: 'md-select-option:slot',
            body: ['<md-select-option value="${1}">', '\t<div slot="headline">${2}</div>', '</md-select-option>'],
        },
    ],
}

export const selectSchemas: ComponentSchema[] = [select, selectOption]
