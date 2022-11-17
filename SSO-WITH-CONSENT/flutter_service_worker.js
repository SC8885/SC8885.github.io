'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ded3cae82978fed354db09df8c20b19b",
"consent-popup-end.html": "4c96026e97d83de138195f9f5a3f607a",
"index.html": "de0ba0650fe054a5feb3fa16ecf38404",
"/": "03a673a94c847e6443f375dc47fe3bd0",
".pages/SimpleSSO/version.json": "ded3cae82978fed354db09df8c20b19b",
".pages/SimpleSSO/index.html": "b5ab563a99f5f3e423d39da2365dc4f9",
".pages/SimpleSSO/main.dart.js": "5d5ae14c9f1feab172a00d840a24ba8c",
".pages/SimpleSSO/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
".pages/SimpleSSO/script.js": "d1b544c5568f415d3ad7fe9b5ab9d30b",
".pages/SimpleSSO/favicon.png": "5dcef449791fa27946b3d35ad8803796",
".pages/SimpleSSO/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".pages/SimpleSSO/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".pages/SimpleSSO/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".pages/SimpleSSO/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".pages/SimpleSSO/manifest.json": "14bfd0883384030d7f2918e0fc0cb998",
".pages/SimpleSSO/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
".pages/SimpleSSO/assets/NOTICES": "fb9e9695eff13a72ecc9316559bef51f",
".pages/SimpleSSO/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
".pages/SimpleSSO/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
".pages/SimpleSSO/assets/shaders/ink_sparkle.frag": "506fc0a6efd277f4b7ad5d203b2e9b55",
".pages/SimpleSSO/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
".pages/SimpleSSO/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
".pages/SimpleSSO/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
".pages/SimpleSSO/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
".pages/SimpleSSO/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
".pages/TestApp/version.json": "ded3cae82978fed354db09df8c20b19b",
".pages/TestApp/index.html": "2cd3ba893d6b2b2a6328dd51c5b310f6",
".pages/TestApp/main.dart.js": "0264e15e767d5c1e571cb27d01d40dc1",
".pages/TestApp/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
".pages/TestApp/script.js": "7df9fc02693827f009d64125331e5453",
".pages/TestApp/favicon.png": "5dcef449791fa27946b3d35ad8803796",
".pages/TestApp/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".pages/TestApp/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".pages/TestApp/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".pages/TestApp/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".pages/TestApp/manifest.json": "14bfd0883384030d7f2918e0fc0cb998",
".pages/TestApp/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
".pages/TestApp/assets/NOTICES": "fb9e9695eff13a72ecc9316559bef51f",
".pages/TestApp/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
".pages/TestApp/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
".pages/TestApp/assets/shaders/ink_sparkle.frag": "506fc0a6efd277f4b7ad5d203b2e9b55",
".pages/TestApp/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
".pages/TestApp/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
".pages/TestApp/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
".pages/TestApp/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
".pages/TestApp/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
".pages/TestAccessToken/version.json": "ded3cae82978fed354db09df8c20b19b",
".pages/TestAccessToken/index.html": "03a673a94c847e6443f375dc47fe3bd0",
".pages/TestAccessToken/main.dart.js": "0264e15e767d5c1e571cb27d01d40dc1",
".pages/TestAccessToken/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
".pages/TestAccessToken/script.js": "4f774cba233e8fdabc04c7152d37643c",
".pages/TestAccessToken/favicon.png": "5dcef449791fa27946b3d35ad8803796",
".pages/TestAccessToken/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".pages/TestAccessToken/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".pages/TestAccessToken/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".pages/TestAccessToken/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".pages/TestAccessToken/manifest.json": "14bfd0883384030d7f2918e0fc0cb998",
".pages/TestAccessToken/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
".pages/TestAccessToken/assets/NOTICES": "fb9e9695eff13a72ecc9316559bef51f",
".pages/TestAccessToken/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
".pages/TestAccessToken/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
".pages/TestAccessToken/assets/shaders/ink_sparkle.frag": "506fc0a6efd277f4b7ad5d203b2e9b55",
".pages/TestAccessToken/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
".pages/TestAccessToken/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
".pages/TestAccessToken/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
".pages/TestAccessToken/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
".pages/TestAccessToken/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
".pages/README.md": "33949383023c5bd036ecac916dd29dec",
".pages/.git/ORIG_HEAD": "fa3a8e9f606f7f25b538b0bbf516ac83",
".pages/.git/config": "e192cb68828867e3d48f863fc863ac62",
".pages/.git/objects/pack/pack-bd01328c2be2a569392919d7a5534861c2e94a55.idx": "501a99b27d3478d67fd8bd2c4dc9f5bd",
".pages/.git/objects/pack/pack-bd01328c2be2a569392919d7a5534861c2e94a55.pack": "fa688280f24fcccbeece10c3e0ff9b61",
".pages/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".pages/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".pages/.git/logs/HEAD": "b68067c2eb0e745aad564fabddde1935",
".pages/.git/logs/refs/heads/main": "b68067c2eb0e745aad564fabddde1935",
".pages/.git/logs/refs/remotes/origin/HEAD": "b68067c2eb0e745aad564fabddde1935",
".pages/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".pages/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".pages/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".pages/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".pages/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".pages/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".pages/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".pages/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".pages/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".pages/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".pages/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".pages/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".pages/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".pages/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".pages/.git/refs/heads/main": "fa3a8e9f606f7f25b538b0bbf516ac83",
".pages/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".pages/.git/index": "ae6263400f17fbc92340b779de223a72",
".pages/.git/packed-refs": "872ef1c7b4d32f9dedb1fd4d4e85ae22",
".pages/.git/COMMIT_EDITMSG": "f136b731effcf96b2f829a8add984872",
".pages/.git/FETCH_HEAD": "f0fb697258e4a72fdb35130a7dc7a5c7",
"main.dart.js": "9d1be419a1f581fda8384b0900717e90",
"consent-popup-start.html": "30e912080c6aff58f931704bcec5a3c5",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"script.js": "e2c4796b644098a1a5bd11d5dfe2df08",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "14bfd0883384030d7f2918e0fc0cb998",
"termsofuse.html": "c8f80b439391b269a6819ede02d00e8d",
"modules/consent-popup-end.js": "896928cf2a6e2250be12a946c2aca521",
"modules/env.js": "33511970fece56b19b01183bbfbe2de8",
"modules/tab.js": "5a36338045a8af475f38affbd4331611",
"modules/consent-popup-start.js": "7173bc060d2fd6de84df9106f07a4510",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "fb9e9695eff13a72ecc9316559bef51f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "506fc0a6efd277f4b7ad5d203b2e9b55",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"tab.html": "2fcfab3f9f6ac4c821379d98e64a8f88",
"privacy.html": "f446d5511f0d9fd67664cf463d4afcd4",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
