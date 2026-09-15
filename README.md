<div align="center">

# material-vscode-extensions (monorepo)

</div>

VS Code extensions for [Material Design 3](https://m3.material.io) & [`@material/web`](https://github.com/material-components/material-web). Two extensions, published and versioned independently.
[Material Design 3（`@material/web`）](https://github.com/material-components/material-web) 的 VS Code 擴展 monorepo：兩個擴展，獨立發佈、獨立版本。

| Package                                                                            | Marketplace                                                                                                               | Contents 內容                                                                                 |
| :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------- |
| [`packages/material-web-snippets`](./packages/material-web-snippets)               | [Material Web Snippets](https://marketplace.visualstudio.com/items?itemName=sandlada.material-web-snippets)               | `md-*` component snippets (HTML / JSX / TSX), tag + attribute IntelliSense, sidebar tree view |
| [`packages/material-design-css-snippets`](./packages/material-design-css-snippets) | [Material Design CSS Snippets](https://marketplace.visualstudio.com/items?itemName=sandlada.material-design-css-snippets) | `--md-sys-color-*` token snippets (CSS), snippets-only                                        |

## Layout 結構

```text
packages/
  material-web-snippets/        # sandlada.material-web-snippets (has code: src/ -> out/)
  material-design-css-snippets/ # sandlada.material-design-css-snippets (snippets-only, no code)
schema/                         # hand-written component schemas + css-tokens.ts (single source of truth)
scripts/                        # generate.ts / verify.ts (write into both packages)
```

## Commands 指令

Run at the repo root. 在 repo 根目錄執行：

```sh
npm run generate        # schema/ -> both packages' snippets + custom data
npm run generate:check  # fail on drift
npm run verify          # validate the written artifacts
npm run compile         # build packages/material-web-snippets (src/ -> out/)
```

Conventions and pitfalls: see [AGENTS.md](./AGENTS.md). 約定與坑見 [AGENTS.md](./AGENTS.md)。

## License 授權

[MIT](./LICENSE)
