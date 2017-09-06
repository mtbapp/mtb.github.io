importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "ae5896a27a8651996fc60a9935a36ca5"
  },
  {
    "url": "inline.e9e9262426c608da1534.bundle.js",
    "revision": "f66ba19403a2b6170fbb31179daabe1a"
  },
  {
    "url": "main.584dac36dc972bad8194.bundle.js",
    "revision": "1ac9f25071496d4c6d0fd4852ec6e650"
  },
  {
    "url": "polyfills.337db143b9a9630c10a6.bundle.js",
    "revision": "854491caff7a7052a578c365385da5a6"
  },
  {
    "url": "styles.b92399fbcd586e52bf79.bundle.css",
    "revision": "b92399fbcd586e52bf793e41aad3cff8"
  },
  {
    "url": "vendor.f15ec5d56e1b9549e9e3.bundle.js",
    "revision": "c7d4ad395c5e4e8646c59c4f261b0a22"
  },
  {
    "url": "?utm_source=pwa",
    "revision": "c3f38be937acf7d9d6f61ed53eda91a6"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
