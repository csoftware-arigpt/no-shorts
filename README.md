# No Shorts No Reels

A Safari Web Extension for iOS and macOS that hides YouTube Shorts and Instagram Reels.

## Features

- Hides Shorts shelves, links, and navigation entries on YouTube.
- Hides Reels links on Instagram.
- Redirects direct Shorts/Reels URLs back to the site home page.
- Runs locally in Safari with no analytics or external service.

## Requirements

- macOS with Xcode
- Safari on iOS or macOS

## Development

1. Open `no-shorts.xcodeproj` in Xcode.
2. Select either the `no-shorts (iOS)` or `no-shorts (macOS)` target.
3. Set your Apple development team in Signing & Capabilities.
4. Replace the placeholder bundle identifiers if you plan to install on a device or distribute the app.
5. Build and run from Xcode.

The default bundle identifiers are placeholders under `com.example.no-shorts`. Change both the app target and extension target together, keeping the extension identifier as the app identifier plus `.Extension`.

## Privacy

See `PRIVACY.md`.

## License

MIT
