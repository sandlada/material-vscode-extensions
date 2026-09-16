import { ComponentSchema } from './types'

/**
 * Segmented button family (button + set). Buttons must be used inside a set.
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/labs/segmentedbutton}
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/labs/segmentedbuttonset}
 */
export const segmentedButton: ComponentSchema = {
    family: 'segmented-button',
    familyPrefix: 'md-outlined-segmented-button',
    tags: [
        {
            name: 'md-outlined-segmented-button',
            description: 'MdOutlinedSegmentedButton is the custom element for the Material Design outlined segmented button component. It is intended only for use as a child of a segmented button set.',
        },
    ],
    attributes: [
        {
            name: 'disabled',
            description: 'Whether or not the segmented button is disabled.',
            kind: 'boolean',
        },
        {
            name: 'selected',
            description: 'Whether or not the segmented button is selected.',
            kind: 'boolean',
        },
        {
            name: 'label',
            description: 'The text label of the segmented button.',
            kind: 'string',
        },
        {
            name: 'no-checkmark',
            description: 'Hides the checkmark shown on selected buttons.',
            kind: 'boolean',
        },
        {
            name: 'has-icon',
            description: 'Set this to true when an icon is present.',
            kind: 'boolean',
        },
    ],
}

export const segmentedButtonSet: ComponentSchema = {
    family: 'segmented-button-set',
    familyPrefix: 'md-outlined-segmented-button-set',
    tags: [
        {
            name: 'md-outlined-segmented-button-set',
            description: 'MdOutlinedSegmentedButtonSet is the custom element for the Material Design outlined segmented button set component. Only segmented button components may be used as children.',
        },
    ],
    baseBody: ['<md-outlined-segmented-button-set>', '\t${1}', '</md-outlined-segmented-button-set>'],
    attributes: [
        {
            name: 'multiselect',
            description: 'Whether or not the set allows selecting multiple buttons.',
            kind: 'boolean',
        },
    ],
}

export const segmentedButtonSchemas: ComponentSchema[] = [segmentedButton, segmentedButtonSet]
