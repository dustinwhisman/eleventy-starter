First time setup:

- [Click this link and make a new
repo.](https://github.com/dustinwhisman/eleventy-starter/generate) This will
open a form for you to create a new repo with all the files from this one.

- Out of the box, you should have:
  - [x] Eleventy configured to build your templates into pages, including a
    catch-all 404 page
  - [x] Sass support with minimal/brutalist styles ready to go, including dark
    mode
  - [x] JS bundling with modern/legacy builds
  - [x] Minimal PWA requirements already met
  - [x] A service worker with precaching and a basic
    cache-falling-back-to-network strategy in place
  - [ ] Documentation explaining what to change, what to delete, and how things
    work

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
Boilerplate styles are in the `src/assets/scss` folder and are output to the
`dist/assets/css` folder.

Sass is organized into folders following an ITCSS convention. The folders are as
follows:
- `settings`: global variables, colors, and fonts should go here
- `tools`: mixins, functions, keyframes, etc. should go here
- `generic`: normalize/reset-type styles, or anything not specific to this site
  should go here
- `elements`: styling for base elements (such as `h1` or `a`) should go here
- `objects`: broad, undecorated design patterns should go here – this is the
  first layer that uses class selectors
- `components`: specific UI components should go here – this is the bread and
  butter
- `vendors`: third party styles should go here so they live side-by-side with
  your own styles, but can still be overridden by utilities
- `utilities`: utilities and helper classes should go here – this is where you
  might use `!important` extensively

## JavaScript

JavaScript files are bundled by Rollup from `src/assets/js` into modern or
legacy bundles in `dist/assets/js/bundled` or `dist/assets/js/legacy`,
respectively. Legacy bundles use Babel to transpile JS into syntax understood by
older browsers. To deliver the right scripts to the right browsers, follow the
module/nomodule pattern:

```html
<script src="/dist/assets/js/bundled/scripts.js" type="module"></script>
<script src="/dist/assets/js/legacy/scripts.js" nomodule></script>
```

If you don't want to serve bundled or transpiled versions of your scripts, we
recommend using the `.mjs` file extension for your JS files, and using
`type=module` in your `script` tags. This may improve performance, depending on
the size and number of files that would otherwise be bundled together.

```html
<script src="/dist/assets/js/non-bundled-script.mjs" type="module"></script>
```

## PWA Requirements

Manifest files, default icons, and the correct meta tags should get you most of
the way to having a working PWA. You will need to update theme colors and icons,
but the infrastructure should already be in place.

Files to update or replace (as desired):
- `src/root/favicon.png`
- `src/root/favicon.svg`
- `src/root/manifest.json`
- `src/root/maskable_icon.png`
- `src/root/splash_icon.png`
- The `<meta name="theme-color" content="#202020">` tag in any layout templates

## robots.txt

By default, this includes an empty `robots.txt` file, which will allow any and
all robots to crawl all pages of your site. If you want to change that, update
`src/root/robots.txt` with your rules (more info
[here](https://developers.google.com/search/docs/advanced/robots/intro))

## Service Worker

The default service worker will precache the home page and the main CSS file,
and it will ignore any URLs from `localhost`. All requests will follow a
cache-falling-back-to-network strategy. Every time the site is built by
Eleventy, a new version number will be given to the service worker, which should
keep you from being bit by cached resources on deploys.

You can specify more routes to precache or exclude, as well as any hostnames to
exclude, such as a CDN, for example. To add more caching strategies for
different types of requests, check out the [Service Worker
Cookbook](https://serviceworke.rs/) by Mozilla or [The Offline
Cookbook](https://jakearchibald.com/2014/offline-cookbook/) by Jake Archibald.
