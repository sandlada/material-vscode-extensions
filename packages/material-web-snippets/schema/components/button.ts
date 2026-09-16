import { ComponentSchema } from './types'

/**
 * Button family (elevated, filled, filled-tonal, outlined, text).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/button}
 */
export const button: ComponentSchema = {
    family: 'button',
    familyPrefix: 'md-button',
    tags: [
        {
            name: 'md-elevated-button',
            description: 'Elevated buttons are essentially filled tonal buttons with a shadow. To prevent shadow creep, only use them when absolutely necessary, such as when the button requires visual separation from a patterned background.',
        },
        {
            name: 'md-filled-button',
            description: 'Filled buttons have the most visual impact after the FAB, and should be used for important, final actions that complete a flow, like Save, Join now, or Confirm.',
        },
        {
            name: 'md-filled-tonal-button',
            description: 'A filled tonal button is an alternative middle ground between filled and outlined buttons. They\'re useful in contexts where a lower-priority button requires slightly more emphasis than an outline would give, such as "Next" in an onboarding flow.',
        },
        {
            name: 'md-outlined-button',
            description: 'Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren\'t the primary action in an app.',
        },
        {
            name: 'md-text-button',
            description: 'Text buttons are used for the lowest priority actions, especially when presenting multiple options.',
        },
    ],
    tagTemplate: 'md-{variant}-button',
    variants: ['elevated', 'filled', 'filled-tonal', 'outlined', 'text'],
    attributes: [
        {
            name: 'disabled',
            description: 'Whether or not the button is disabled.',
            kind: 'boolean',
        },
        {
            name: 'soft-disabled',
            description: 'Whether or not the button is "soft-disabled" (disabled but still focusable).',
            kind: 'boolean',
        },
        {
            name: 'href',
            description: 'The URL that the link button points to.',
            kind: 'string',
        },
        {
            name: 'download',
            description: 'The filename to use when downloading the linked resource.',
            kind: 'string',
        },
        {
            name: 'trailing-icon',
            description: 'Whether to render the icon at the inline end of the label rather than the start.',
            kind: 'boolean',
        },
        {
            name: 'has-icon',
            description: 'Whether to display the icon or not. An icon may optionally be added to a button to help communicate the button\'s action and help draw attention.',
            kind: 'boolean',
        },
        {
            name: 'value',
            description: 'The value of the button. When combined with a name, it is submitted with the form.',
            kind: 'string',
        },
        {
            name: 'name',
            description: 'The HTML name to use in form submission.',
            kind: 'string',
        },
        {
            name: 'form',
            description: 'The ID of the form to associate the button with.',
            kind: 'string',
        },
        {
            name: 'type',
            description: 'Submit is default.',
            kind: 'enum',
            values: [{ name: 'submit' }, { name: 'button' }, { name: 'reset' }],
        },
        {
            name: 'target',
            description: 'Where to display the linked href URL for a link button. Common options include _blank to open in a new tab.',
            kind: 'enum',
            values: [{ name: '_blank' }, { name: '_parent' }, { name: '_self' }, { name: '_top' }],
        },
    ],
}

export const buttonSchemas: ComponentSchema[] = [button]
