# ui-song-theme

[English](README.md) | 中文

一个面向 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的宋式美学主题插件。它通过可撤销的 `ThemeRuntime.overrideTokens()` 层提供完整的浅色与深色取值，同时保留用户选择的 `light`、`dark` 或 `system` 外观偏好。

浅色主题结合绢纸色表面、暖墨文字、汝窑青瓷交互色与朱砂错误状态。深色主题使用夜墨表面和更明亮的青瓷强调色。展示标题优先使用系统已安装的宋体与 CJK 衬线字体，正文继续沿用 Harness 的无衬线字体栈。

## 安装

将 GitHub 仓库作为 bundle 安装到 Web profile：

```sh
dsh plugin --profile web add github:yunfei07/ui-song-theme
dsh --profile web
```

需要可复现安装时，请锁定具体 commit：

```sh
dsh plugin --profile web add github:yunfei07/ui-song-theme#<commit-sha>
```

仓库会提交 `lib/` 构建产物，所以从 GitHub 安装时不需要执行包构建脚本。bundle 会加入 `ui-song-theme` 客户端行；它对 `theme` 服务的注入保证基础 dsh 主题就绪后才挂载这层 token。

卸载命令：

```sh
dsh plugin --profile web remove ui-song-theme
```

## 色彩体系

| 角色 | 浅色 | 深色 |
| --- | --- | --- |
| 基础表面 | 绢纸 | 夜墨 |
| 主要文字 | 暖墨 | 淡纸 |
| 强调色 | 汝窑青瓷 | 亮青瓷 |
| 错误状态 | 朱砂 | 浅朱砂 |
| 几何 | 2 至 12 px 语义圆角 | 相同 |

每个覆盖项都同时提供浅色和深色值。卸载插件只会移除自身层，并恢复下方主题。

## 开发

```sh
corepack pnpm@11.21.0 install
pnpm check
pnpm build
pnpm pack:check
```

构建产物会有意提交，因为 dsh 支持直接从 Git 仓库安装插件。

## 兼容性

- Node.js `^22.19.0` 或 `>=24.0.0`
- DeepSeek Harness UI theme `>=0.1.0-rc.6 <0.2.0`
- 系统字体可用性会影响宋体字形的具体度量

## 许可证

[MIT](LICENSE)
