import { ComponentSchema } from './types'

/**
 * Ripple (attaches to a control via the `for` attribute, like focus-ring).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/ripple}
 */
export const ripple: ComponentSchema = {
    family: 'ripple',
    familyPrefix: 'md-ripple',
    tags: [
        {
            name: 'md-ripple',
            description: 'Ripples display on hover and press pointer interactions. They may be attached to a control in one of three ways.',
        },
    ],
    attributes: [
        {
            name: 'disabled',
            description: 'Disables the ripple.',
            kind: 'boolean',
        },
        {
            name: 'for',
            description: 'ID of the control element the ripple attaches to.',
            kind: 'string',
            placeholder: 'controlId',
        },
    ],
}

export const rippleSchemas: ComponentSchema[] = [ripple]
