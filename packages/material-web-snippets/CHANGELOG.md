# Change Log

All notable changes to the "material-web-vscode-snippets" extension will be documented in this file.

## [0.1.0]

- Removed the sidebar tree view (ActivityBar `Material Web Components` view, `src/`, `out/`): the extension is now snippets-only, mirroring `material-design-css-snippets`.
- Every snippet now shows a description in the completion list; `:full-properties` variants gained summaries and attribute-less components no longer emit an empty `:full-properties` entry.
- Monorepo: this package moved to `packages/material-web-snippets` with independent versioning.
- CSS token snippets moved to the new sibling extension `material-design-css-snippets`; install it for `--md-sys-color-*` completions.
- HTML snippets now also contribute to JSX (`javascriptreact`) and TSX (`typescriptreact`).

## [0.0.5] and earlier

- Single-extension releases: HTML snippets, CSS token snippets, HTML custom data, and the sidebar tree view.
