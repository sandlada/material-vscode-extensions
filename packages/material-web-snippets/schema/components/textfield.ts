import { ComponentSchema } from './types'

/**
 * Text field family (filled, outlined).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/textfield}
 */
export const textField: ComponentSchema = {
    family: 'text-field',
    familyPrefix: 'md-text-field',
    tags: [
        {
            name: 'md-filled-text-field',
            description: 'Filled and outlined text fields are functionally identical. See choosing a text field for guidance on which one to use.',
        },
        {
            name: 'md-outlined-text-field',
            description: 'Filled and outlined text fields are functionally identical. See choosing a text field for guidance on which one to use.',
        },
    ],
    tagTemplate: 'md-{variant}-text-field',
    variants: ['filled', 'outlined'],
    baseBody: ['<md-{variant}-text-field label="${2}">', '</md-{variant}-text-field>'],
    attributes: [
        {
            name: 'disabled',
            description: 'Whether or not the text field is disabled.',
            kind: 'boolean',
        },
        {
            name: 'error',
            description: 'Gets or sets whether or not the text field is in a visually invalid state. This error state overrides the error state controlled by reportValidity().',
            kind: 'boolean',
        },
        {
            name: 'error-text',
            description: 'The error message that replaces supporting text when error is true. If errorText is an empty string, then the supporting text will continue to show. This error message overrides the error message displayed by reportValidity().',
            kind: 'string',
        },
        {
            name: 'label',
            description: 'The floating Material label of the textfield component.',
            kind: 'string',
        },
        {
            name: 'no-asterisk',
            description: 'Disables the asterisk on the floating label, when the text field is required.',
            kind: 'boolean',
        },
        {
            name: 'required',
            description: 'Indicates that the user must specify a value for the input before the owning form can be submitted.',
            kind: 'boolean',
        },
        {
            name: 'value',
            description: 'The current value of the text field. It is always a string.',
            kind: 'string',
        },
        {
            name: 'prefix-text',
            description: 'An optional prefix to display before the input value.',
            kind: 'string',
        },
        {
            name: 'suffix-text',
            description: 'An optional suffix to display after the input value.',
            kind: 'string',
        },
        {
            name: 'has-leading-icon',
            description: 'Whether or not the text field has a leading icon. Used for SSR.',
            kind: 'boolean',
        },
        {
            name: 'has-trailing-icon',
            description: 'Whether or not the text field has a trailing icon. Used for SSR.',
            kind: 'boolean',
        },
        {
            name: 'supporting-text',
            description: 'Conveys additional information below the text field.',
            kind: 'string',
        },
        {
            name: 'text-direction',
            description: 'Override the input text CSS `direction`.',
            kind: 'string',
        },
        {
            name: 'rows',
            description: 'The number of rows to display for a `type="textarea"` text field.',
            kind: 'string',
        },
        {
            name: 'cols',
            description: 'The number of cols to display for a `type="textarea"` text field.',
            kind: 'string',
        },
        {
            name: 'inputmode',
            description: 'The input mode (keyboard type) for the text field.',
            kind: 'string',
        },
        {
            name: 'max',
            description: 'Defines the greatest value in the range of permitted values.',
            kind: 'string',
        },
        {
            name: 'maxlength',
            description: 'The maximum number of characters a user can enter into the text field.',
            kind: 'string',
        },
        {
            name: 'min',
            description: 'Defines the most negative value in the range of permitted values.',
            kind: 'string',
        },
        {
            name: 'minlength',
            description: 'The minimum number of characters a user can enter into the text field.',
            kind: 'string',
        },
        {
            name: 'pattern',
            description: 'A regular expression that the text field\'s value must match.',
            kind: 'string',
        },
        {
            name: 'placeholder',
            description: 'Defines the text displayed in the textfield when it has no value.',
            kind: 'string',
        },
        {
            name: 'readonly',
            description: 'Indicates whether or not a user should be able to edit the text field.',
            kind: 'boolean',
        },
        {
            name: 'multiple',
            description: 'Indicates that input accepts multiple email addresses.',
            kind: 'boolean',
        },
        {
            name: 'step',
            description: 'Returns or sets the element\'s step attribute.',
            kind: 'string',
        },
        {
            name: 'no-spinner',
            description: 'When true, hide the spinner for `type="number"` text fields.',
            kind: 'boolean',
        },
        {
            name: 'type',
            description: 'The `<input>` type to use, defaults to "text".',
            kind: 'enum',
            values: [{ name: 'text' }, { name: 'email' }, { name: 'number' }, { name: 'password' }, { name: 'search' }, { name: 'tel' }, { name: 'url' }, { name: 'textarea' }],
        },
        {
            name: 'autocomplete',
            description: 'Describes what, if any, type of autocomplete functionality the input provides.',
            kind: 'string',
        },
        {
            name: 'name',
            description: 'The HTML name to use in form submission.',
            kind: 'string',
        },
        {
            name: 'form',
            description: 'The ID of the form to associate the text field with.',
            kind: 'string',
        },
    ],
}

export const textfieldSchemas: ComponentSchema[] = [textField]
