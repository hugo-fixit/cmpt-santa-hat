<!-- markdownlint-disable-file MD033 MD041 -->
<h1 align="center">🎄 Santa Hat | FixIt</h1>

<div align="center" class="ignore">
  <p>A Christmas Easter Egg by JavaScript.</p>
  <a href="/README.md">简体中文</a> |
  <a href="https://fixit.lruihao.cn/zh-cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=chinese_traditional">繁體中文</a> |
  English |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=french">Français</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=russian">Русский язык</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=spanish">Español</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=hindi">हिन्दी</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=deutsch">deutsch</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=korean">한국어</a> |
  <a href="https://fixit.lruihao.cn/ecosystem/hugo-fixit/cmpt-santa-hat/?lang=japanese">しろうと</a>
</div>

## Features

- 🎅 Automatically adds Santa hat decoration to site logos during Christmas season (December 20-26)
- 🎯 Automatic date detection, no manual toggling required
- 💫 Lightweight implementation with no performance impact

## Requirements

- FixIt v0.4.0 or later.

## Install Component

The installation method is the same as [installing a theme](https://fixit.lruihao.cn/documentation/installation/). There are several ways to install, choose one, Here are two mainstream ways.

### Install as Hugo Module

First make sure that your project itself is a [Hugo module](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module).

Then add this theme component to your `hugo.toml` configuration file:

```toml
[module]

[[module.imports]]
path = "github.com/hugo-fixit/FixIt"

[[module.imports]]
path = "github.com/hugo-fixit/cmpt-santa-hat"
```

On the first start of Hugo it will download the required files.

To update to the latest version of the module run:

```bash
hugo mod get -u
hugo mod tidy
```

### Install as Git Submodule

Clone [FixIt](https://github.com/hugo-fixit/FixIt) and this git repository into your theme folder and add it as submodules of your website directory.

```bash
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
git submodule add https://github.com/hugo-fixit/cmpt-santa-hat.git themes/cmpt-santa-hat
```

Next edit `hugo.toml` of your project and add this theme component to your themes:

```toml
theme = ["FixIt", "cmpt-santa-hat"]
```

## Configuration

In order to Inject the partial `santa-hat.fixit.html` into the `custom-assets` through the [custom block](https://fixit.lruihao.cn/references/blocks/) opened by the FixIt theme in the `layouts/_partials/custom.html` file, you need to fill in the following necessary configurations:

```toml
[params]

[params.customPartials]
# ... other partials
assets = [
  "inject/santa-hat.fixit.html",
]
# ... other partials
```

## Styling

- Recommended logo size: 32x32 pixels.
- CSS variables:
  - `--fi-santa-hat-offset`: Controls hat translation relative to the logo, default `8px 2px`.
  - `--fi-santa-hat-shadow`: Controls hat shadow RGB values, default `0, 0, 0`; automatically switches to `255, 255, 255` in dark mode.

## References

- [Develop Theme Components | FixIt](https://fixit.lruihao.cn/contributing/components/)
- [How to Develop a Hugo Theme Component | FixIt](https://fixit.lruihao.cn/components/dev-component/)
