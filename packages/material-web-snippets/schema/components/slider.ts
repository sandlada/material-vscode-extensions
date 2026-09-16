import { ComponentSchema } from './types'

/**
 * Slider.
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/slider}
 */
export const slider: ComponentSchema = {
    family: 'slider',
    familyPrefix: 'md-slider',
    tags: [
        {
            name: 'md-slider',
            description: 'Sliders allow users to view and select a value (or range) along a track. They\'re ideal for adjusting settings such as volume and brightness, or for applying image filters.',
        },
    ],
    attributes: [
        {
            name: 'disabled',
            description: 'Whether or not the slider is disabled.',
            kind: 'boolean',
        },
        {
            name: 'min',
            description: 'The slider minimum value',
            kind: 'string',
        },
        {
            name: 'max',
            description: 'The slider maximum value',
            kind: 'string',
        },
        {
            name: 'value',
            description: 'The slider value displayed when range is false.',
            kind: 'string',
        },
        {
            name: 'value-start',
            description: 'The slider start value displayed when range is true.',
            kind: 'string',
        },
        {
            name: 'value-end',
            description: 'The slider end value displayed when range is true.',
            kind: 'string',
        },
        {
            name: 'value-label',
            description: 'An optional label for the slider\'s value.',
            kind: 'string',
        },
        {
            name: 'value-label-start',
            description: 'An optional label for the slider\'s start value.',
            kind: 'string',
        },
        {
            name: 'value-label-end',
            description: 'An optional label for the slider\'s end value.',
            kind: 'string',
        },
        {
            name: 'aria-label-start',
            description: 'Aria label for the slider\'s start handle.',
            kind: 'string',
        },
        {
            name: 'aria-label-end',
            description: 'Aria label for the slider\'s end handle.',
            kind: 'string',
        },
        {
            name: 'aria-valuetext-start',
            description: 'Aria value text for the slider\'s start value.',
            kind: 'string',
        },
        {
            name: 'aria-valuetext-end',
            description: 'Aria value text for the slider\'s end value.',
            kind: 'string',
        },
        {
            name: 'step',
            description: 'The step between values.',
            kind: 'string',
        },
        {
            name: 'ticks',
            description: 'Whether or not to show tick marks.',
            kind: 'boolean',
        },
        {
            name: 'labeled',
            description: 'Whether or not to show a value label when activated.',
            kind: 'boolean',
        },
        {
            name: 'range',
            description: 'Whether or not to show a value range.',
            kind: 'boolean',
        },
        {
            name: 'name',
            description: 'The HTML name to use in form submission.',
            kind: 'string',
        },
        {
            name: 'form',
            description: 'The ID of the form to associate the slider with.',
            kind: 'string',
        },
    ],
}

export const sliderSchemas: ComponentSchema[] = [slider]
