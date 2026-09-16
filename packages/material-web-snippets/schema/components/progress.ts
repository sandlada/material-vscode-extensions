import { ComponentSchema } from './types'

/**
 * Progress indicators (circular, linear).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/progress}
 */
export const circularProgress: ComponentSchema = {
    family: 'circular-progress',
    familyPrefix: 'md-circular-progress',
    tags: [
        {
            name: 'md-circular-progress',
            description: 'Circular progress indicators display progress by animating along an invisible circular track in a clockwise direction.',
        },
    ],
    attributes: [
        {
            name: 'value',
            description: 'Progress to display, a fraction between 0 and max.',
            kind: 'string',
        },
        {
            name: 'max',
            description: 'Maximum progress to display, defaults to 1.',
            kind: 'string',
        },
        {
            name: 'indeterminate',
            description: 'Whether or not to display indeterminate progress, which gives no indication to how long an activity will take.',
            kind: 'boolean',
        },
        {
            name: 'four-color',
            description: 'Whether or not to render indeterminate mode using 4 colors instead of one.',
            kind: 'boolean',
        },
    ],
}

export const linearProgress: ComponentSchema = {
    family: 'linear-progress',
    familyPrefix: 'md-linear-progress',
    tags: [
        {
            name: 'md-linear-progress',
            description: 'Linear progress indicators display progress by animating along the length of a fixed, visible track.',
        },
    ],
    attributes: [
        {
            name: 'buffer',
            description: 'Buffer amount to display, a fraction between 0 and max. If the value is 0 or negative, the buffer is not displayed.',
            kind: 'string',
        },
        {
            name: 'value',
            description: 'Progress to display, a fraction between 0 and max.',
            kind: 'string',
        },
        {
            name: 'max',
            description: 'Maximum progress to display, defaults to 1.',
            kind: 'string',
        },
        {
            name: 'indeterminate',
            description: 'Whether or not to display indeterminate progress, which gives no indication to how long an activity will take.',
            kind: 'boolean',
        },
        {
            name: 'four-color',
            description: 'Whether or not to render indeterminate mode using 4 colors instead of one.',
            kind: 'boolean',
        },
    ],
}

export const progressSchemas: ComponentSchema[] = [circularProgress, linearProgress]
