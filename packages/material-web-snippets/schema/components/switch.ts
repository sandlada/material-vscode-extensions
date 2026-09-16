import { ComponentSchema } from './types'

/**
 * Switch.
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/switch}
 */
export const switchSchema: ComponentSchema = {
    family: 'switch',
    familyPrefix: 'md-switch',
    tags: [
        {
            name: 'md-switch',
            description: 'Switches toggle the state of an item on or off.',
            treeLabel: 'Switch',
        },
    ],
    attributes: [
        {
            name: 'disabled',
            description: 'Disables the switch and makes it non-interactive.',
            kind: 'boolean',
        },
        {
            name: 'selected',
            description: 'Puts the switch in the selected state and sets the form submission value to the value property.',
            kind: 'boolean',
        },
        {
            name: 'icons',
            description: 'Shows both the selected and deselected icons.',
            kind: 'boolean',
        },
        {
            name: 'show-only-selected-icon',
            description: 'Shows only the selected icon, and not the deselected icon. If true, overrides the behavior of the icons property.',
            kind: 'boolean',
        },
        {
            name: 'required',
            description: 'When true, require the switch to be selected when participating in form submission. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation',
            kind: 'boolean',
        },
        {
            name: 'value',
            description: 'The value associated with this switch on form submission.',
            kind: 'string',
        },
        {
            name: 'name',
            description: 'The HTML name to use in form submission.',
            kind: 'string',
        },
        {
            name: 'form',
            description: 'The ID of the form to associate the switch with.',
            kind: 'string',
        },
    ],
}

export const switchSchemas: ComponentSchema[] = [switchSchema]
