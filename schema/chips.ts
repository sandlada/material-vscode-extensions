import { ComponentSchema } from './types'

/**
 * Chips family (chip set + assist, filter, input, suggestion chips).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/chips}
 */
const linkTarget = [{ name: '_blank' }, { name: '_parent' }, { name: '_self' }, { name: '_top' }]
const alwaysFocusableDescription = 'When true, allow disabled chips to be focused with arrow keys. Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.'

export const chipSet: ComponentSchema = {
    family: 'chip-set',
    familyPrefix: 'md-chip-set',
    tags: [
        {
            name: 'md-chip-set',
            description: 'Chips help people enter information, make selections, filter content, or trigger actions.',
            treeLabel: 'Chip Set',
        },
    ],
    baseBody: ['<md-chip-set>', '\t${1}', '</md-chip-set>'],
    attributes: [
    ],
}

export const assistChip: ComponentSchema = {
    family: 'assist-chip',
    familyPrefix: 'md-assist-chip',
    tags: [
        {
            name: 'md-assist-chip',
            description: 'Assist chips represent smart or automated actions that can span multiple apps, such as opening a calendar event from the home screen. Assist chips function as though the user asked an assistant to complete the action. They should appear dynamically and contextually in a UI.',
            treeLabel: 'Assist Chip',
        },
    ],
    attributes: [
        {
            name: 'elevated',
            kind: 'boolean',
        },
        {
            name: 'href',
            description: 'Sets the underlying HTMLAnchorElement\'s href resource attribute.',
            kind: 'string',
        },
        {
            name: 'download',
            description: 'The filename to use when downloading the linked resource. If not specified, the browser will determine a filename.',
            kind: 'string',
        },
        {
            name: 'target',
            description: 'Sets the underlying HTMLAnchorElement\'s target attribute.',
            kind: 'enum',
            values: linkTarget,
        },
        {
            name: 'disabled',
            description: 'Whether or not the chip is disabled. Disabled chips are not focusable, unless `always-focusable` is set.',
            kind: 'boolean',
        },
        {
            name: 'soft-disabled',
            description: 'Whether or not the chip is "soft-disabled" (disabled but still focusable).',
            kind: 'boolean',
        },
        {
            name: 'always-focusable',
            description: alwaysFocusableDescription,
            kind: 'boolean',
        },
        {
            name: 'label',
            description: 'The label of the chip.',
            kind: 'string',
        },
        {
            name: 'has-icon',
            description: 'Only needed for SSR. Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content.',
            kind: 'boolean',
        },
    ],
}

export const filterChip: ComponentSchema = {
    family: 'filter-chip',
    familyPrefix: 'md-filter-chip',
    tags: [
        {
            name: 'md-filter-chip',
            description: 'Filter chips use tags or descriptive words to filter content. They can be a good alternative to toggle buttons or checkboxes.',
            treeLabel: 'Filter Chip',
        },
    ],
    attributes: [
        {
            name: 'elevated',
            kind: 'boolean',
        },
        {
            name: 'removable',
            kind: 'boolean',
        },
        {
            name: 'selected',
            kind: 'boolean',
        },
        {
            name: 'disabled',
            description: 'Whether or not the chip is disabled. Disabled chips are not focusable, unless `always-focusable` is set.',
            kind: 'boolean',
        },
        {
            name: 'soft-disabled',
            description: 'Whether or not the chip is "soft-disabled" (disabled but still focusable).',
            kind: 'boolean',
        },
        {
            name: 'always-focusable',
            description: alwaysFocusableDescription,
            kind: 'boolean',
        },
        {
            name: 'label',
            description: 'The label of the chip.',
            kind: 'string',
        },
        {
            name: 'aria-label-remove',
            kind: 'string',
        },
        {
            name: 'has-icon',
            description: 'Only needed for SSR. Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content.',
            kind: 'boolean',
        },
        {
            name: 'has-selected-icon',
            description: 'Only needed for SSR. Add this attribute when a filter chip has a `slot="selected-icon"` to avoid a Flash Of Unstyled Content.',
            kind: 'boolean',
        },
    ],
}

export const inputChip: ComponentSchema = {
    family: 'input-chip',
    familyPrefix: 'md-input-chip',
    tags: [
        {
            name: 'md-input-chip',
            description: 'Input chips represent discrete pieces of information entered by a user, such as Gmail contacts or filter options within a search field. Input chips whose icons are user images may add the avatar attribute to display the image in a larger circle.',
            treeLabel: 'Input Chip',
        },
    ],
    attributes: [
        {
            name: 'avatar',
            kind: 'boolean',
        },
        {
            name: 'href',
            description: 'Sets the underlying HTMLAnchorElement\'s href resource attribute.',
            kind: 'string',
        },
        {
            name: 'target',
            description: 'Sets the underlying HTMLAnchorElement\'s target attribute.',
            kind: 'enum',
            values: linkTarget,
        },
        {
            name: 'remove-only',
            kind: 'boolean',
        },
        {
            name: 'selected',
            kind: 'boolean',
        },
        {
            name: 'disabled',
            description: 'Whether or not the chip is disabled. Disabled chips are not focusable, unless `always-focusable` is set.',
            kind: 'boolean',
        },
        {
            name: 'soft-disabled',
            description: 'Whether or not the chip is "soft-disabled" (disabled but still focusable).',
            kind: 'boolean',
        },
        {
            name: 'always-focusable',
            description: alwaysFocusableDescription,
            kind: 'boolean',
        },
        {
            name: 'label',
            description: 'The label of the chip.',
            kind: 'string',
        },
        {
            name: 'aria-label-remove',
            kind: 'string',
        },
        {
            name: 'has-icon',
            description: 'Only needed for SSR. Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content.',
            kind: 'boolean',
        },
    ],
}

export const suggestionChip: ComponentSchema = {
    family: 'suggestion-chip',
    familyPrefix: 'md-suggestion-chip',
    tags: [
        {
            name: 'md-suggestion-chip',
            description: 'Suggestion chips help narrow a user\'s intent by presenting dynamically generated suggestions, such as possible responses or search filters.',
            treeLabel: 'Suggestion Chip',
        },
    ],
    attributes: [
        {
            name: 'elevated',
            kind: 'boolean',
        },
        {
            name: 'href',
            description: 'Sets the underlying HTMLAnchorElement\'s href resource attribute.',
            kind: 'string',
        },
        {
            name: 'download',
            description: 'The filename to use when downloading the linked resource. If not specified, the browser will determine a filename.',
            kind: 'string',
        },
        {
            name: 'target',
            description: 'Sets the underlying HTMLAnchorElement\'s target attribute.',
            kind: 'enum',
            values: linkTarget,
        },
        {
            name: 'disabled',
            description: 'Whether or not the chip is disabled. Disabled chips are not focusable, unless `always-focusable` is set.',
            kind: 'boolean',
        },
        {
            name: 'soft-disabled',
            description: 'Whether or not the chip is "soft-disabled" (disabled but still focusable).',
            kind: 'boolean',
        },
        {
            name: 'always-focusable',
            description: alwaysFocusableDescription,
            kind: 'boolean',
        },
        {
            name: 'label',
            description: 'The label of the chip.',
            kind: 'string',
        },
        {
            name: 'has-icon',
            description: 'Only needed for SSR. Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content.',
            kind: 'boolean',
        },
    ],
}

export const chipsSchemas: ComponentSchema[] = [chipSet, assistChip, filterChip, inputChip, suggestionChip]
