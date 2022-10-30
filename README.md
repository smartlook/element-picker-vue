Smartlook element picker (Vue)
==========================

Your task is to implement a component generally known as
the Element Picker. Its main functionality is very simple: it allows users to select an element
and returns a selector that can be used to target this element.

This repository contains simple Chrome extension with Vue support to help you start with the assigment.

You can read more about Chrome extension development on an [official docs page](https://developer.chrome.com/docs/extensions/).
Build on [sanyu1225/vue-cli-plugin-chrome-extension-cli](https://github.com/sanyu1225/vue-cli-plugin-chrome-extension-cli)

# Installation
This project requires Node.js and NPM package manager to run.
In order to continue please ensure you installed those prerequisites first.

```

npm install                   # install all packages

npm run lint                  # run eslint & prettier linter
npm run lint:fix              # run eslint & prettier linter with automatic fixes

npm run dev                   # run extension in development mode (hot-reload)
```

## Extension installation
Open Chrome and navigate to `chrome://extensions/` page.
In the right top corner enable `Developer mode` after that
click on `Load unpacked` (top left corner) and select extension
from <path>/element-picker/dist.
Note you need to perform this step only once hopefully.

<img width="1680" alt="image" src="https://user-images.githubusercontent.com/12775440/190911933-ffaac2aa-8336-4483-8c12-b2716a9cab7a.png">

## Project structure
    .
    ├── node_modules       # NPM packages
    ├── dist               # Build output
    ├── src                # Source files
    │   ├──	assets         # Files copied to dist
    │   ├──	entry          # Entry scripts for browser extension interfaces
    │   ├── view           # Code for all browser extension interfaces
    │   ├── utils          # Commonly used functions
    ├── LICENSE
    └── README.md
    └── vue.config.js
