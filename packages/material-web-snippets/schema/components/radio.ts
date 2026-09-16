import { ComponentSchema } from './types'

/**
 * Radio.
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/radio}
 */
export const radio: ComponentSchema = {
    family: 'radio',
    familyPrefix: 'md-radio',
    tags: [
        {
            name: 'md-radio',
            description: 'Radios behave like <input type="radio"> elements and form a group with the same name attribute. Only one radio can be selected in a group.',
        },
    ],
    attributes: [
        {
            name: 'disabled',
            description: 'Whether or not the radio is disabled.',
            kind: 'boolean',
        },
        {
            name: 'required',
            description: 'Whether or not the radio is required.',
            kind: 'boolean',
        },
        {
            name: 'value',
            description: 'The element value to use in form submission when checked.',
            kind: 'string',
        },
        {
            name: 'checked',
            description: 'Whether or not the radio is selected.',
            kind: 'boolean',
        },
        {
            name: 'name',
            description: 'The HTML name to use in form submission.',
            kind: 'string',
        },
        {
            name: 'form',
            description: 'The ID of the form to associate the radio with.',
            kind: 'string',
        },
    ],
}

export const radioSchemas: ComponentSchema[] = [radio]
