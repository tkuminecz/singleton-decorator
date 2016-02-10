[![Build Status](https://travis-ci.org/tkuminecz/es7-umd-module-seed.svg?branch=master)](https://travis-ci.org/tkuminecz/es7-umd-module-seed)

# es7-umd-module-seed
Seed repository for an ES7 project to build a UMD module.

Features (you get all this by default):
* JSPM
* Babel (stage-1 preset)
* "Legacy" ES7 decorator support
* Flowtype support

## Getting started
Clone the repo and make it your own:

```
$ git clone https://github.com/tkuminecz/es7-umd-module-seed.git
$ mv es7-umd-module-seed YOUR_PROJECT
$ cd YOUR_PROJECT
$ rm -rf .git
```

By default, the module this project builds is exported to the global namespace (when appropriate) as `Module`. You can change the identifier in the config section of `package.json`.

```javascript
{
  ...
  "config": {
    "globalName": "Module"
  }
  ...
}
```

## Working On Your Project
The entry point to your module is `src/module/index.js`. All related module code should also go in `src/module`.

You can use `src/main.js` as a place to write development/testing code that won't get exported in the final module. It's simply a place to test out how others would consume your module.

Run your module in the browser:`npm run web`

or with Node: `npm run node`

## Building & Publishing
Building and publishing the module to NPM is simple.
```
$ npm run build
$ npm publish
```
