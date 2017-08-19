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
    "revision": "b55a1146fb9990a6e7ec07ee7ec5b394"
  },
  {
    "url": "inline.48c572888408f80c3ea6.bundle.js",
    "revision": "291bbf934c2d17fbb3acec92ba3d3d10"
  },
  {
    "url": "main.860583c96aae84ea167f.bundle.js",
    "revision": "733c804cf08ef95829e73982b9d40e98"
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
    "revision": "6b9dd5468bffa8b906eed0ab78e75567"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
