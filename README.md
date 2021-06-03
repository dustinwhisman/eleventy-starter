First time setup:

- [Click this link and make a new
repo.](https://github.com/dustinwhisman/eleventy-starter/generate) This will
open a form for you to create a new repo with all the files from this one.

- Out of the box, you should have:
  - [ ] Eleventy configured to build your templates into pages, including a
    catchall 404 page
  - [ ] Sass support with minimal/brutalist styles ready to go, including dark
    mode
  - [ ] JS bundling with modern/legacy builds
  - [ ] Most PWA requirements already met
  - [ ] A service worker with reasonable defaults for different types of
    requests
  - [ ] Support for localization/internationalization

- Update your details throughout the repo:
  - `package.json`
  - `README.md`

- Start changing stuff! That includes styles, pages, and adding your own project
  specifics.

- Delete this documentation

# Eleventy Starter

1. Before running the project, set up node/npm with the latest versions (check
   the "engines" section in `package.json` for details).
1. Run `npm install`
1. Run `npm start`. This will
  - Build project files
  - Start the development server (`http://localhost:8080`)
  - Run watch tasks on Sass/JS files as well as your templates

## Eleventy

This uses [Eleventy](https://11ty.dev) as its static site generator. It supports
many different kinds of templating languages, so check out the
[documentation](https://11ty.dev) to see what you can do with it.

## Sass

This project uses [Sass](https://sass-lang.com/) to compile into CSS.
Boilerplate styles are in the `src/scss` folder and are output to the `dist/css`
folder.

## JavaScript

JavaScript files are bundled by Rollup from `src/js` into modern or legacy
bundles in `dist/js`. Legacy bundles use Babel to transpile JS into syntax
understood by older browsers. To deliver the right scripts to the right
browsers, follow the module/nomodule pattern:

```html
<script src="/dist/js/scripts.js" type="module"></script>
<script src="/dist/js/scripts.legacy.js" nomodule></script>
```

If you don't want to bundle or transpile your scripts, use the `.mjs` file
extension for your JS files, and define them as `modules`. This may improve
performance, depending on the size and number of files that would otherwise be
bundled together.

```html
<script src="/dist/js/non-bundled-script.mjs" type="module"></script>
```

## PWA Requirements

Manifest files, default icons, and the correct meta tags should get you most of
the way to having a working PWA. You will need to update theme colors and icons,
but the infrastructure should already be in place.

## Service Worker

The default service worker should have sensible defaults for different types of
requests, using patterns like cache-falling-back-to-network, network-only,
cache-and-network-race, etc. to make your site lightning fast.
