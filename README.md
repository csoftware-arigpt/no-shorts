# No Shorts No Reels

A Safari and Firefox extension that hides YouTube Shorts and Instagram Reels.

## Features

- Hides Shorts shelves, links, and navigation entries on YouTube.
- Hides Reels links on Instagram.
- Redirects direct Shorts/Reels URLs back to the site home page.
- Runs locally in the browser with no analytics or external service.

## Requirements

### Safari

- macOS with Xcode
- Safari on iOS or macOS

### Firefox

- Firefox 128 or newer
- A POSIX shell for the local build script

## Safari Install

This project is not packaged as a downloadable app yet. Install it locally from Xcode:

1. Clone the repository: `git clone https://github.com/readyyyk/no-shorts.git`.
2. Open `no-shorts.xcodeproj` in Xcode.
3. Select the `no-shorts (iOS)` or `no-shorts (macOS)` target.
4. Set your Apple development team in Signing & Capabilities.
5. Replace the placeholder `com.example.no-shorts` bundle identifiers with your own app and extension identifiers.
6. Build and run the app on your device or Mac.
7. Enable the extension in Safari.

On iOS, open Settings, then Safari, then Extensions, then enable No Shorts No Reels. On macOS, open Safari, then Settings, then Extensions, then enable No Shorts No Reels.

## Firefox Install

Build the unpacked Firefox extension from the shared web extension resources:

```sh
scripts/build-firefox-extension.sh
```

Then open `about:debugging#/runtime/this-firefox` in Firefox, choose "Load Temporary Add-on...", and select `dist/firefox/manifest.json`.

If `zip` is installed, the build script also creates `dist/no-shorts-no-reels-firefox.zip` for distribution or AMO submission.

## Development

### Safari

1. Open `no-shorts.xcodeproj` in Xcode.
2. Select either the `no-shorts (iOS)` or `no-shorts (macOS)` target.
3. Set your Apple development team in Signing & Capabilities.
4. Replace the placeholder bundle identifiers if you plan to install on a device or distribute the app.
5. Build and run from Xcode.

The default bundle identifiers are placeholders under `com.example.no-shorts`. Change both the app target and extension target together, keeping the extension identifier as the app identifier plus `.Extension`.

### Firefox

Firefox uses `Firefox (Extension)/manifest.json` and the shared assets in `Shared (Extension)/Resources`.
Run `scripts/build-firefox-extension.sh` after changing shared extension files, then reload the temporary add-on in Firefox.

## Privacy

See `PRIVACY.md`.

## License

MIT
