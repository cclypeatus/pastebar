# Pastebar

A simple, scuffed FireFox extension to open Pastebin in the sidebar.

This is meant to be an improvised solution while I develop a more solid notes extension, so it is unlikely to see more development, while the optional `stylus/` styles may receive updates.

## Setup

### Firefox

1. Fork this repository:
```sh
git clone https://github.com/cclypeatus/pastebar.git
# or use another option provided by the green Code button above
```
2. In Firefox, go on [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox) 
3. Click `Load Temporary Add-on...`
4. Navigate to your fork's directory and select the `manifest.json`.

Afterward, you can click the toolbar icon to open Pastebin on the sidebar.

**Note:** `dummy.html` intentionally doesn't exist, which has the side effect of the sidebar initially booting up with a blank page.

## Usage

It is recommended to use this in combination with the [Stylus](https://github.com/openstyles/stylus) extension to inject the `stylus/` styles:
- [`stylus/base.css`](stylus/base.css) maximizes the textarea of a pastebin-creating/editing page at the expense of everything but most optional paste settings and account-related buttons.
- [`stylus/saveless.css`](stylus/saveless.css) further removes all optional paste settings except for syntax highlighting on the pastebin-creating page.

## Credits

Icons:
- **FontAwesome** for [SVG](https://fontawesome.com/icons/note-sticky?f=classic&s=solid).
- Mozilla Firefox's **Acorn** design system for [dark](https://acorn.firefox.com/latest/styles/color-MZHBVuZc#section-purple-e7) and [light colors](https://acorn.firefox.com/latest/styles/color-MZHBVuZc#section-yellow-c2).

