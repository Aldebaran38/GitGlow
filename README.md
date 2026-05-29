# GitGlow

<p align="center">
  <img src="./icon.png" width="128" height="128" alt="GitGlow Logo" />
</p>

GitGlow is a Google Chrome extension that allows you to customize the color palette of the GitHub contribution calendar. You can switch between different styles using the extension popup.

## Features

- **Theme Options**: Toggle between three different display modes:
  - **All Colorful**: Purple, Blue, Yellow, and Green gradient.
  - **All Green**: Saturated light green for all activity levels.
  - **Default GitHub**: The standard multi-tone green contribution colors.
- **Theme Compatibility**: Works with both GitHub's light and dark themes.
- **Implementation**: Built using Chrome Extension Manifest V3, local storage API, and CSS injection.

## Color Mapping

### All Colorful Theme
- Level 0 (No activity): Default background
- Level 1: Purple (`#a855f7`)
- Level 2: Blue (`#3b82f6`)
- Level 3: Yellow (`#fbbf24`)
- Level 4: Green (`#10b981`)

### All Green Theme
- Level 0 (No activity): Default background
- Level 1 to 4: Vibrant Green (`#39d353`)

## Installation

To load the extension locally in Google Chrome:

1. Clone or download this repository.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** using the toggle in the top-right corner.
4. Click **Load unpacked** in the top-left corner.
5. Select the `GithubGreen` project folder.
6. Open the extension popup from the browser toolbar to switch themes.
