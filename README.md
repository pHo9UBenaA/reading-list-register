# Reading List Register

A Chrome extension that allows you to quickly add the active tab to your Reading
List using keyboard shortcuts.

## Features

- Add the current tab to Chrome's Reading List with a single click or keyboard
  shortcut.
- Simple activation via left-click on the extension icon or keyboard shortcut
  (Control/Command + B).

## Important Information

1. For instructions on enabling the extension in incognito mode, see:
   [Google Support](https://support.google.com/chrome/a/answer/13130396)
2. If the shortcut keys do not work, go to `chrome://extensions/shortcuts` and
   reassign the keys.

## Installation

1. Download or clone this repository
2. Build the extension (see Development section below)
3. Load the extension in Chrome:
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the built extension directory

## Development

To set up the development environment for Pin Switcher, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone git@github.com:pHo9UBenaA/reading-list-register.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd reading-list-register
   ```

3. **Build the Extension**:

   ```bash
   deno task build
   ```

4. **Load the Extension into Chrome**:

   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle in the top right corner.
   - Click "Load unpacked" and select the `dist` directory within your project
     folder.

## Permissions

This extension requires the following permissions:

- `readingList`: Required to add tabs to Chrome's Reading List
- `tabs`: Required to access the active tab's information

## License

This project is licensed under the [MIT License](LICENSE). See the license file
for more details.
