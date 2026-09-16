import { ComponentSchema } from './types'

/**
 * Checkbox.
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/checkbox}
 */
export const checkbox: ComponentSchema = {
    family: 'checkbox',
    familyPrefix: 'md-checkbox',
    tags: [
        {
            name: 'md-checkbox',
            description: 'Checkboxes allow users to select one or more items from a set. Checkboxes can turn an option on or off.',
        },
    ],
    attributes: [
        {
            name: 'checked',
            description: 'Whether or not the checkbox is selected.',
            kind: 'boolean',
        },
        {
            name: 'disabled',
            description: 'Whether or not the checkbox is disabled.',
            kind: 'boolean',
        },
        {
            name: 'indeterminate',
            description: 'Whether or not the checkbox is indeterminate. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes',
            kind: 'boolean',
        },
        {
            name: 'required',
            description: 'When true, require the checkbox to be selected when participating in form submission. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation',
            kind: 'boolean',
        },
        {
            name: 'value',
            description: 'The value of the checkbox that is submitted with a form when selected. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value',
            kind: 'string',
        },
        {
            name: 'name',
            description: 'The HTML name to use in form submission.',
            kind: 'string',
        },
        {
            name: 'form',
            description: 'The ID of the form to associate the checkbox with.',
            kind: 'string',
        },
    ],
}

export const checkboxSchemas: ComponentSchema[] = [checkbox]
