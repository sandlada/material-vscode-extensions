import { ComponentSchema } from './types'

/**
 * Dialog (own slot structure only; variants embedding other components were dropped).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/dialog}
 */
export const dialog: ComponentSchema = {
    family: 'dialog',
    familyPrefix: 'md-dialog',
    tags: [
        {
            name: 'md-dialog',
            description: 'Dialogs behave like <dialog> elements, and can be closed with a <form method="dialog"> element. Dialogs have three optional sections: the headline title, the main content, and action buttons.',
            treeLabel: 'Dialog',
        },
    ],
    attributes: [
        {
            name: 'open',
            description: 'Opens the dialog when set to `true` and closes it when set to `false`.',
            kind: 'boolean',
        },
        {
            name: 'quick',
            description: 'Skips the opening and closing animations.',
            kind: 'boolean',
        },
        {
            name: 'type',
            description: 'The type of dialog for accessibility. Set this to `alert` to announce a dialog as an alert dialog.',
            kind: 'enum',
            values: [{ name: 'alert' }],
        },
        {
            name: 'no-focus-trap',
            description: 'Disables focus trapping, which by default keeps keyboard Tab navigation within the dialog.',
            kind: 'boolean',
        },
    ],
    snippetOverrides: [
        {
            key: 'MD Dialog',
            prefix: 'md-dialog',
            description: 'Dialogs behave like <dialog> elements, and can be closed with a <form method="dialog"> element. Dialogs have three optional sections: the headline title, the main content, and action buttons.',
            body: ['<md-dialog>', '\t<div slot="headline">${1}</div>', '\t<form slot="content" method="dialog">${2}</form>', '\t<div slot="actions">${3}</div>', '</md-dialog>'],
        },
        {
            key: 'MD Dialog Open',
            prefix: 'md-dialog:open',
            description: 'Dialogs are opened and closed by setting the open attribute or property.',
            body: ['<md-dialog open>', '\t<div slot="headline">${1}</div>', '\t<form slot="content" method="dialog">${2}</form>', '\t<div slot="actions">${3}</div>', '</md-dialog>'],
        },
        {
            key: 'MD Dialog Slot',
            prefix: 'md-dialog:slot',
            body: ['<${1|div,form|} slot="${2|headline,content,actions|}">${3}</${1|div,form|}>'],
        },
    ],
}

export const dialogSchemas: ComponentSchema[] = [dialog]
