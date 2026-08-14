# ui-song-theme

English | [中文](README.zh.md)

A Song-inspired visual theme plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness). It contributes a reversible `ThemeRuntime.overrideTokens()` layer with complete light and dark values while preserving the user's `light`, `dark`, or `system` preference.

The light palette combines silk-paper surfaces, warm ink text, Ru-celadon interactions, and cinnabar error states. The dark palette uses night-ink surfaces with a brighter celadon accent. Display headings prefer installed Song and CJK serif fonts; body text keeps the Harness sans-serif stack.

## Install

Install the repository as a bundle into a Web profile:

```sh
dsh plugin --profile web add github:yunfei07/ui-song-theme
dsh --profile web
```

For reproducible installations, pin a commit:

```sh
dsh plugin --profile web add github:yunfei07/ui-song-theme#<commit-sha>
```

The repository commits its `lib/` artifacts, so a GitHub installation does not need to run a package build script. The bundle adds the `ui-song-theme` client row; its `theme` service injection ensures the base dsh theme is ready before this token layer mounts.

Remove it with:

```sh
dsh plugin --profile web remove ui-song-theme
```

## Palette

| Role | Light | Dark |
| --- | --- | --- |
| Base surface | Silk paper | Night ink |
| Primary text | Warm ink | Pale paper |
| Accent | Ru celadon | Bright celadon |
| Error | Cinnabar | Light cinnabar |
| Geometry | 2 to 12 px semantic radii | Same |

Every override has paired light and dark values. Unloading the plugin removes only its layer and restores the theme below it.

## Development

```sh
corepack pnpm@11.21.0 install
pnpm check
pnpm build
pnpm pack:check
```

Build output is committed intentionally because dsh supports installing plugins directly from Git repositories.

## Compatibility

- Node.js `^22.19.0` or `>=24.0.0`
- DeepSeek Harness UI theme `>=0.1.0-rc.6 <0.2.0`
- System font availability affects exact Song glyph metrics

## License

[MIT](LICENSE)
