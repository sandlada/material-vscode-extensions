import { ComponentSchema } from './types'

/**
 * md-focus-ring schema (pilot).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/focus}
 * Props curated from focus/internal/focus-ring.d.ts JSDoc:
 * - visible/inward: boolean props -> boolean attrs
 * - htmlFor (string|null, no JSDoc): real HTML attribute is `for`
 * - control (HTMLElement|null): JS-only property, NOT an HTML attribute -> omitted
 */
export const focusRing: ComponentSchema = {
    family: 'focus-ring',
    familyPrefix: 'md-focus-ring',
    tags: [
        {
            name: 'md-focus-ring',
            description: 'Focus rings are accessible outlines for components to show keyboard focus.',
        },
    ],
    attributes: [
        {
            name: 'visible',
            description: 'Makes the focus ring visible.',
            kind: 'boolean',
        },
        {
            name: 'inward',
            description: 'Makes the focus ring animate inwards instead of outwards.',
            kind: 'boolean',
        },
        {
            name: 'for',
            description: 'ID of the control element the focus ring attaches to.',
            kind: 'string',
            placeholder: 'controlId',
        },
    ],
}
