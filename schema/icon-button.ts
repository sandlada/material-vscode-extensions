import { ComponentSchema } from './types'

/**
 * Icon button family (icon, filled-icon, filled-tonal-icon, outlined-icon).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/iconbutton}
 */
export const iconButton: ComponentSchema = {
    family: 'icon-button',
    familyPrefix: 'md-icon-button',
    tags: [
        {
            name: 'md-icon-button',
            description: 'Icon buttons can be grouped together or they can stand alone.',
            treeLabel: 'Icon Button',
        },
        {
            name: 'md-filled-icon-button',
            description: 'Filled icon buttons have higher visual impact and are best for high emphasis actions.',
            treeLabel: 'Filled Icon Button',
        },
        {
            name: 'md-filled-tonal-icon-button',
            description: 'Filled tonal icon buttons are a middle ground between filled and outlined icon buttons. They\'re useful in contexts where the button requires slightly more emphasis than an outline would give, such as a secondary action paired with a high emphasis action.',
            treeLabel: 'Filled Tonal Icon Button',
        },
        {
            name: 'md-outlined-icon-button',
            description: 'Outlined icon buttons are medium-emphasis buttons. They\'re useful when an icon button needs more emphasis than a standard icon button but less than a filled or filled tonal icon button.',
            treeLabel: 'Outlined Icon Button',
        },
    ],
    tagTemplate: 'md-{variant}-button',
    variants: ['icon', 'filled-icon', 'filled-tonal-icon', 'outlined-icon'],
    attributes: [
        {
            name: 'disabled',
            description: 'Disables the icon button and makes it non-interactive.',
            kind: 'boolean',
        },
        {
            name: 'soft-disabled',
            description: '"Soft-disables" the icon button (disabled but still focusable).',
            kind: 'boolean',
        },
        {
            name: 'flip-icon-in-rtl',
            description: 'Flips the icon if it is in an RTL context at startup.',
            kind: 'boolean',
        },
        {
            name: 'href',
            description: 'Sets the underlying HTMLAnchorElement\'s href resource attribute.',
            kind: 'string',
        },
        {
            name: 'download',
            description: 'The filename to use when downloading the linked resource.',
            kind: 'string',
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
            name: 'target',
            description: 'Sets the underlying HTMLAnchorElement\'s target attribute.',
            kind: 'enum',
            values: [{ name: '_blank' }, { name: '_parent' }, { name: '_self' }, { name: '_top' }],
        },
        {
            name: 'aria-label-selected',
            description: 'The `aria-label` of the button when the button is toggleable and selected.',
            kind: 'string',
        },
        {
            name: 'toggle',
            description: 'When true, the button will toggle between selected and unselected states',
            kind: 'boolean',
        },
        {
            name: 'selected',
            description: 'Sets the selected state. When false, displays the default icon. When true, displays the selected icon, or the default icon If no slot="selected" icon is provided.',
            kind: 'boolean',
        },
        {
            name: 'type',
            description: 'Submit is default.',
            kind: 'enum',
            values: [{ name: 'submit' }, { name: 'button' }, { name: 'reset' }],
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
    ],
}

export const iconButtonSchemas: ComponentSchema[] = [iconButton]
