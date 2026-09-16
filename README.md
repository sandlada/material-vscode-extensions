<div align="center">

# material-vscode-extensions (monorepo)

[繁體中文](./README.TW.md)

</div>

VS Code extensions for [Material Design 3](https://m3.material.io) & [`@material/web`](https://github.com/material-components/material-web). Two extensions, published and versioned independently.

| Package                                                                            | Marketplace                                                                                                               | Contents                                                                                          |
| :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------ |
| [`packages/material-web-snippets`](./packages/material-web-snippets)               | [Material Web Snippets](https://marketplace.visualstudio.com/items?itemName=sandlada.material-web-snippets)               | `md-*` component snippets (HTML / JSX / TSX), tag + attribute IntelliSense, sidebar tree view     |
| [`packages/material-design-css-snippets`](./packages/material-design-css-snippets) | [Material Design CSS Snippets](https://marketplace.visualstudio.com/items?itemName=sandlada.material-design-css-snippets) | `--md-*` design token snippets (color, palette, typescale, shape, motion, space; CSS), snippets-only |

## Layout

```text
packages/
  material-web-snippets/        # sandlada.material-web-snippets (has code: src/ -> out/)
  material-design-css-snippets/ # sandlada.material-design-css-snippets (snippets-only, no code)
schema/                         # components/ per-family schemas + tokens/ per-group token files (single source of truth)
scripts/                        # generate.ts / verify.ts (write into both packages)
```

## Commands

Run at the repo root:

```sh
npm run generate        # schema/ -> both packages' snippets + custom data
npm run generate:check  # fail on drift
npm run verify          # validate the written artifacts
npm run compile         # build packages/material-web-snippets (src/ -> out/)
```

Conventions and pitfalls: see [AGENTS.md](./AGENTS.md).

## License

[MIT](./LICENSE)
