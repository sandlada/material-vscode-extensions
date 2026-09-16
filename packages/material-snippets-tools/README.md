# material-snippets-tools

[Traditional Chinese](./README.TW.md)

Shared snippet-builder logic for this monorepo. Build-time only: it is never published and never shipped inside a vsix.

## Contents

- `src/types.ts` — shared structural shapes (`ComponentSchema`, `CssToken`, `SnippetDef`). Schemas in each extension package keep their own identical declarations so they stay dependency-free; these give the builders a stable input shape.
- `src/html.ts` — HTML-side builders: `buildSnippets`, `buildHtmlTags`, `buildMegaSnippet`, `buildTreeItems`.
- `src/css.ts` — CSS-side builder: `buildCssSnippets` (three forms per token: `var(--token)`, `var(--token, fallback)`, value only).
- `src/verify-utils.ts` — shared verify helpers: `parseJsonc`, `checkPlaceholders`, `expand`, `checkTagPair`. They throw instead of exiting, so each package's `verify` script owns its CLI failure format.

## Usage

```sh
npm run build    # compile src/ -> dist/
```

Consumed via the workspace dependency `material-snippets-tools` by each extension package's `scripts/generate.ts` and `scripts/verify.ts` (compiled with `tsconfig.tools.json`, run from `tools-dist/`). The root `npm run build:tools` builds this package before any package-level `generate` / `verify`.

Toolchain style: 4 spaces, LF, no trailing semicolons. See [AGENTS.md](../../AGENTS.md).

## License

[MIT](../material-web-snippets/LICENSE)
