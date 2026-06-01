# Firefox Extension

This directory contains the Firefox-specific manifest for No Shorts No Reels.
The JavaScript, popup, locale, and image assets are shared with the Safari web
extension under `Shared (Extension)/Resources`.

## Build

From the repository root:

```sh
scripts/build-firefox-extension.sh
```

The script creates `dist/firefox`, which can be loaded as a temporary add-on in
Firefox from `about:debugging#/runtime/this-firefox`.

If `zip` is available, the script also creates
`dist/no-shorts-no-reels-firefox.zip` for distribution or AMO submission.

## Manifest Notes

- `browser_specific_settings.gecko.id` is required for signed Manifest V3
  Firefox extensions.
- `data_collection_permissions.required` is set to `none` because the extension
  runs locally and does not collect or transmit user data.
- `gecko_android` is present so the add-on can be offered for Firefox for
  Android.
