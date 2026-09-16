import { ComponentSchema } from './types'

/**
 * Field family (filled, outlined). Internal containers used by text fields and selects.
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/field}
 */
export const field: ComponentSchema = {
    family: 'field',
    familyPrefix: 'md-field',
    tags: [
        {
            name: 'md-filled-field',
            description: 'Filled container for form field content such as labels and supporting text.',
            treeLabel: 'Filled Field',
        },
        {
            name: 'md-outlined-field',
            description: 'Outlined container for form field content such as labels and supporting text.',
            treeLabel: 'Outlined Field',
        },
    ],
    tagTemplate: 'md-{variant}-field',
    variants: ['filled', 'outlined'],
    attributes: [
        {
            name: 'disabled',
            description: 'Whether or not the field is disabled.',
            kind: 'boolean',
        },
        {
            name: 'error',
            description: 'Whether or not the field is in an error state.',
            kind: 'boolean',
        },
        {
            name: 'focused',
            description: 'Whether or not the field is focused.',
            kind: 'boolean',
        },
        {
            name: 'label',
            description: 'The floating label of the field.',
            kind: 'string',
        },
        {
            name: 'no-asterisk',
            description: 'Disables the asterisk on the floating label, when the field is required.',
            kind: 'boolean',
        },
        {
            name: 'populated',
            description: 'Whether or not the field has a value.',
            kind: 'boolean',
        },
        {
            name: 'required',
            description: 'Whether or not the field is required.',
            kind: 'boolean',
        },
        {
            name: 'resizable',
            description: 'Whether or not the field is resizable.',
            kind: 'boolean',
        },
        {
            name: 'supporting-text',
            description: 'Conveys additional information below the field.',
            kind: 'string',
        },
        {
            name: 'error-text',
            description: 'The error message shown when the field is in an error state.',
            kind: 'string',
        },
        {
            name: 'count',
            description: 'The current character count of the field.',
            kind: 'string',
        },
        {
            name: 'max',
            description: 'The maximum character count of the field.',
            kind: 'string',
        },
        {
            name: 'has-start',
            description: 'Whether or not the field has leading content.',
            kind: 'boolean',
        },
        {
            name: 'has-end',
            description: 'Whether or not the field has trailing content.',
            kind: 'boolean',
        },
    ],
}

export const fieldSchemas: ComponentSchema[] = [field]
