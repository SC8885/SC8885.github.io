'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "51ae1f2e1c69591df8b2936defbfe4d8",
"index.html": "4b4e48b62cea6a27befe71fd6b962879",
"/": "ad05061631025637ee5b1cb5f26cf4ca",
"main.dart.js": "eb4493bbcd293e56505b4dbc9e047fb2",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0e5f95517503ed72cdf44fc1f2ae3a97",
"assets/AssetManifest.json": "da57b71fe60b81c605bc8a5d576a614b",
"assets/NOTICES": "59e1f6447073325b7fdd07e897bc1e14",
"assets/FontManifest.json": "d7fa4c2f04c5555c884ca73a2a1ad538",
"assets/packages/giphy_picker/assets/PoweredBy_200px-Black_HorizText.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/reflexis_ui/lib/assets/strings/zh.json": "b1a0f2961c98db83c76382512914ba96",
"assets/packages/reflexis_ui/lib/assets/strings/tr.json": "4fc25f45b4de86a377e5a724d54c5374",
"assets/packages/reflexis_ui/lib/assets/strings/sl.json": "5786a427a4df0d610713a2d9692f892a",
"assets/packages/reflexis_ui/lib/assets/strings/hu.json": "ba8f94b4e24aac3eb4b1066bdf3df8a2",
"assets/packages/reflexis_ui/lib/assets/strings/lt.json": "e86630a9b3578b3493a6c031c33fc56e",
"assets/packages/reflexis_ui/lib/assets/strings/zh_HK.json": "b1a0f2961c98db83c76382512914ba96",
"assets/packages/reflexis_ui/lib/assets/strings/fr_BE.json": "d45998f186e541a073dc27f2cb5595d6",
"assets/packages/reflexis_ui/lib/assets/strings/es_ES.json": "4d9ea995dbaa306a11bc4aa9e92ca39d",
"assets/packages/reflexis_ui/lib/assets/strings/nl.json": "62505756a8a1000a7bfad975ed8dd3c7",
"assets/packages/reflexis_ui/lib/assets/strings/de_AT.json": "2b976112261e72f87e78abb09d2750ae",
"assets/packages/reflexis_ui/lib/assets/strings/es_PE.json": "e86b161ddba3e16581508332b5cce8de",
"assets/packages/reflexis_ui/lib/assets/strings/ja.json": "6bfef63387b05f3eb6df2d5095fb6b42",
"assets/packages/reflexis_ui/lib/assets/strings/de.json": "2b976112261e72f87e78abb09d2750ae",
"assets/packages/reflexis_ui/lib/assets/strings/es_CL.json": "e86b161ddba3e16581508332b5cce8de",
"assets/packages/reflexis_ui/lib/assets/strings/ru.json": "4a7f24921415a412f0f2db84de3b8a59",
"assets/packages/reflexis_ui/lib/assets/strings/pl.json": "f9427f9006d823477c9fd8925c60abfd",
"assets/packages/reflexis_ui/lib/assets/strings/uk.json": "ae6349650c51aa49d3e3afed9aaa17a6",
"assets/packages/reflexis_ui/lib/assets/strings/en_CA.json": "9f870cdf02afebaaadccf4f9416a7158",
"assets/packages/reflexis_ui/lib/assets/strings/fi.json": "c106cb5addf625adfbeb081d2ab13c51",
"assets/packages/reflexis_ui/lib/assets/strings/sk.json": "5e0fec3b7db4bd7cd53410f025e62544",
"assets/packages/reflexis_ui/lib/assets/strings/pt.json": "4b84f6987fd8d58cfdc01331ce8dee9d",
"assets/packages/reflexis_ui/lib/assets/strings/en.json": "9f870cdf02afebaaadccf4f9416a7158",
"assets/packages/reflexis_ui/lib/assets/strings/ka.json": "6a68732515bbcb599bc9e904448c611c",
"assets/packages/reflexis_ui/lib/assets/strings/it.json": "67788df0e654ff3a6de6cddccd0c6b32",
"assets/packages/reflexis_ui/lib/assets/strings/sr.json": "7355172d19253e0a01bb7e2979b85927",
"assets/packages/reflexis_ui/lib/assets/strings/hr.json": "4074e091796c9d0d666f4b778ae9f41c",
"assets/packages/reflexis_ui/lib/assets/strings/tl.json": "203cf26711125dfb68df97e0a8546d86",
"assets/packages/reflexis_ui/lib/assets/strings/es_EC.json": "e86b161ddba3e16581508332b5cce8de",
"assets/packages/reflexis_ui/lib/assets/strings/en_US.json": "9f870cdf02afebaaadccf4f9416a7158",
"assets/packages/reflexis_ui/lib/assets/strings/en_GB.json": "9f870cdf02afebaaadccf4f9416a7158",
"assets/packages/reflexis_ui/lib/assets/strings/in.json": "4ae99484cbe9e255ebbf552a6700648c",
"assets/packages/reflexis_ui/lib/assets/strings/bs.json": "2a30ebb0c404dc04d412909e20096b3b",
"assets/packages/reflexis_ui/lib/assets/strings/fr.json": "608592b83cea2a7f92f261c6b15f71d8",
"assets/packages/reflexis_ui/lib/assets/strings/el.json": "a3bef5f495c355ef0e8a8c3f7e240f0b",
"assets/packages/reflexis_ui/lib/assets/strings/bg.json": "d84c2ad95a4371195d0e70658798fdcc",
"assets/packages/reflexis_ui/lib/assets/strings/ro.json": "42798df70c9ce28a79f47d7cf5e9126c",
"assets/packages/reflexis_ui/lib/assets/strings/ko.json": "a3b4ea5be5f13ebc617c719fa24ac224",
"assets/packages/reflexis_ui/lib/assets/strings/vi.json": "bcde3a70d83d5dc432caaebaa54f37f8",
"assets/packages/reflexis_ui/lib/assets/strings/cs.json": "73eff6c35a1a32cd405193bd50376730",
"assets/packages/reflexis_ui/lib/assets/strings/pt_BR.json": "4a12601b8cd320bde6fd144cffc83883",
"assets/packages/reflexis_ui/lib/assets/strings/lv.json": "30da7d648c382c462f4d34cd0c4f6335",
"assets/packages/reflexis_ui/lib/assets/strings/th.json": "6b683ea0679660d9dee9e3c5b6773f1b",
"assets/packages/reflexis_ui/lib/assets/strings/sv.json": "ec46396a64451abce588420de94a7379",
"assets/packages/reflexis_ui/lib/assets/strings/es_UY.json": "e86b161ddba3e16581508332b5cce8de",
"assets/packages/reflexis_ui/lib/assets/strings/es.json": "8d7418ba822bd39e09d37d5a9523bb21",
"assets/packages/reflexis_ui/lib/assets/strings/fr_CA.json": "a99797968cbe03d47f26dec55d6184bf",
"assets/packages/reflexis_ui/lib/assets/strings/ar.json": "5873065293490c08a503b1899a705fd6",
"assets/packages/reflexis_ui/lib/assets/strings/nb.json": "28417e69f27ae558571d204c53e93a8c",
"assets/packages/reflexis_ui/lib/assets/strings/de_BE.json": "dd2a8bac43e5e814e48fcf705915a2b8",
"assets/packages/reflexis_ui/lib/assets/strings/es_PR.json": "e86b161ddba3e16581508332b5cce8de",
"assets/packages/reflexis_ui/lib/assets/images/search.svg": "79b7ce956cdf0a63c1af7c04be0956a2",
"assets/packages/reflexis_ui/lib/assets/images/notes.svg": "5ca34a0734c621172f00cca3e6ee7f65",
"assets/packages/reflexis_ui/lib/assets/images/load_fail.svg": "7c751f1b6a3d324f45730a20f0645706",
"assets/packages/reflexis_ui/lib/assets/images/completed_tasks.svg": "0dc32bc07940c6b4a5c9607ad7473191",
"assets/packages/reflexis_ui/lib/assets/images/cloud_fail.svg": "8a86ae2f4b82c4adcfafaeea80bc98df",
"assets/packages/reflexis_ui/lib/assets/images/sad_zebra.svg": "f3c754f52a7679fb5275cb3902de459b",
"assets/packages/reflexis_ui/lib/assets/images/chat.svg": "9c280d1b4a767df3784d10e463d7dee5",
"assets/packages/reflexis_ui/lib/assets/images/server_fail.svg": "d20bc5ecaa1d0681198fd0289565f12f",
"assets/packages/reflexis_ui/lib/assets/images/empty_box.svg": "34fcee2d89e36a035a22d687e57ccfdc",
"assets/packages/reflexis_ui/lib/assets/images/calendar.svg": "8f8779a6f7c1cec4fec20ae3a5b04c6d",
"assets/packages/reflexis_ui/lib/assets/images/notifications.svg": "a03c4a5e18990a6f598cc1c1c81bdaea",
"assets/packages/reflexis_ui/lib/assets/editors/balloon/index.html": "b6196a9e894fead49e1eae738c6c5633",
"assets/packages/reflexis_ui/lib/assets/editors/balloon/styles.css": "ea38c964a8c511d9a150105249a77f08",
"assets/packages/reflexis_ui/lib/assets/editors/balloon/ckeditor.js": "45196a8b144ed42da7fd5a4ecbefddc7",
"assets/packages/reflexis_ui/lib/assets/editors/balloon/ckeditor.js.map": "eacc8928aff76a87c790cccf09300c6a",
"assets/packages/reflexis_ui/lib/assets/editors/classic/index.html": "ad05061631025637ee5b1cb5f26cf4ca",
"assets/packages/reflexis_ui/lib/assets/editors/classic/styles.css": "2456f28fca3d1cd5a69cd6055d258e60",
"assets/packages/reflexis_ui/lib/assets/editors/classic/ckeditor.js": "d2c04d7c9f0679b43e250ac35c7efc0f",
"assets/packages/reflexis_ui/lib/assets/editors/classic/ckeditor.js.map": "2cdf38696299c7dc6f4c83dd3ee8709a",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-MediumItalic.ttf": "cabdb4a12e5de710afde298809306937",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-ThinItalic.ttf": "7384da64612787e3662872e9d19cbc2d",
"assets/packages/reflexis_ui/lib/assets/fonts/reflexis.ttf": "7cf4e51f78e5dabe4ec61ce8df517e0b",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-BoldItalic.ttf": "0be9fa8f2863998d1e52c84165976880",
"assets/packages/reflexis_ui/lib/assets/fonts/selection.json": "f3bc93de4a8081d4f47cfbd8293e782e",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-LightItalic.ttf": "2ffc058ddedacfeaa23542026c8108e2",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-BlackItalic.ttf": "c470ca2b5b4f4437a3fe71b113a289a2",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/packages/reflexis_ui/lib/assets/fonts/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/packages/flutter_inappwebview/assets/web/web_support.js": "1c365cc5ce2a69c366034266252d2cfa",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/ztmf_localizations/lib/assets/zh.json": "36ab39cf32c50ffa69f44178f3da7d13",
"assets/packages/ztmf_localizations/lib/assets/tr.json": "872379e82e7212ed642b197fb6d136e9",
"assets/packages/ztmf_localizations/lib/assets/mk.json": "5516ecf1de048fc48a6c378353c4d7f2",
"assets/packages/ztmf_localizations/lib/assets/sl.json": "c816b56fa14afd910df4bb41b1aa08bd",
"assets/packages/ztmf_localizations/lib/assets/hu.json": "372962aee3fe985ee14c3fb5428df79c",
"assets/packages/ztmf_localizations/lib/assets/lt.json": "1e36afacefce00e5ec1edb2b3bcee381",
"assets/packages/ztmf_localizations/lib/assets/zh_HK.json": "e250ea937f680e37ebb50ceaecf870ea",
"assets/packages/ztmf_localizations/lib/assets/fr_BE.json": "0eeb71ad902b324c36d1dedbed89362f",
"assets/packages/ztmf_localizations/lib/assets/es_ES.json": "14936f82eea22433d93d0c3557c6be28",
"assets/packages/ztmf_localizations/lib/assets/nl.json": "bd2c7ea17ab869bfade4c6093c17281a",
"assets/packages/ztmf_localizations/lib/assets/de_AT.json": "4d9a7629c28f2fcd1474b4a004074f6d",
"assets/packages/ztmf_localizations/lib/assets/es_PE.json": "d3b73b4bada68ebad733de7d4a3165bc",
"assets/packages/ztmf_localizations/lib/assets/ja.json": "d056e15523914740fa0f13467644c60f",
"assets/packages/ztmf_localizations/lib/assets/de.json": "92f0c062e44847f2304e0d0bb4c8ffc8",
"assets/packages/ztmf_localizations/lib/assets/es_CL.json": "81af76678e083bae5d268fb0bf22e54a",
"assets/packages/ztmf_localizations/lib/assets/ru.json": "b693e4d23f0f7ef87491d57bfc160916",
"assets/packages/ztmf_localizations/lib/assets/pl.json": "e4e793bf00b39cebd1a492016744b20d",
"assets/packages/ztmf_localizations/lib/assets/uk.json": "60c62e3987599c931577dfdf9adc8e6b",
"assets/packages/ztmf_localizations/lib/assets/en_CA.json": "1abc8a0828f16d322d1e63e087c84970",
"assets/packages/ztmf_localizations/lib/assets/fi.json": "bee14d23be73e4d4d2e3b89843679be5",
"assets/packages/ztmf_localizations/lib/assets/sk.json": "ae2401df6a75d768f8369b4ec6e4ea5c",
"assets/packages/ztmf_localizations/lib/assets/pt.json": "0c4a9d0b32670fd638ac28813389a0b8",
"assets/packages/ztmf_localizations/lib/assets/en.json": "6de1b4ff138d70989d40da3eec83c86f",
"assets/packages/ztmf_localizations/lib/assets/ka.json": "a8ffb08b88fd05d0c75a9c1393807fb0",
"assets/packages/ztmf_localizations/lib/assets/it.json": "5a73ed8b407f5975bd3ff96e8e2c131c",
"assets/packages/ztmf_localizations/lib/assets/sr.json": "5807e182e43f7d2bc520a6bb7b8eaf88",
"assets/packages/ztmf_localizations/lib/assets/hr.json": "1472194d52a1d59d44cbea298ea3e54d",
"assets/packages/ztmf_localizations/lib/assets/tl.json": "23afa810cf73bed29768130be1b10cd4",
"assets/packages/ztmf_localizations/lib/assets/es_EC.json": "ed267b013b215a592f2e98e25403748e",
"assets/packages/ztmf_localizations/lib/assets/en_GB.json": "b2bef37b190990ecc3617f5778047cd5",
"assets/packages/ztmf_localizations/lib/assets/sq.json": "de4a32fb50fa0cf1a3e4c1b2365ee20b",
"assets/packages/ztmf_localizations/lib/assets/in.json": "6c99c2bc3b7b2f3860b0d68aba8a28ff",
"assets/packages/ztmf_localizations/lib/assets/bs.json": "3416fca1caf015715771edc4eecf81dd",
"assets/packages/ztmf_localizations/lib/assets/fr.json": "7f21eadfbb00c28ea2c8b652021b3d6a",
"assets/packages/ztmf_localizations/lib/assets/el.json": "f26d282a40398c04a8a43d4978b12645",
"assets/packages/ztmf_localizations/lib/assets/bg.json": "9c8cf79263bda2450140a48afac99f00",
"assets/packages/ztmf_localizations/lib/assets/ro.json": "771fb688e3484e94c2a868f295737310",
"assets/packages/ztmf_localizations/lib/assets/ko.json": "95790626032e3895801d06c6cfa891c6",
"assets/packages/ztmf_localizations/lib/assets/vi.json": "668ffab30d3cc91809df7a12fe3dda50",
"assets/packages/ztmf_localizations/lib/assets/cs.json": "b450bb05ef573c6b7f8a37d1bdd570cf",
"assets/packages/ztmf_localizations/lib/assets/pt_BR.json": "2c46c658bffda24abcc5ddfa23ff5b34",
"assets/packages/ztmf_localizations/lib/assets/lv.json": "83d56b7d77aaa135348764ccc7dddc77",
"assets/packages/ztmf_localizations/lib/assets/th.json": "f2e9fbc81a1a73396091d06be6feea48",
"assets/packages/ztmf_localizations/lib/assets/sv.json": "03747297f9e380d04e02020e21d603d5",
"assets/packages/ztmf_localizations/lib/assets/es_UY.json": "9c595b8ffbc8b0aee0320f5a4ab6b8d5",
"assets/packages/ztmf_localizations/lib/assets/es.json": "7b3a7dbbb974eff6d0480165ee893dde",
"assets/packages/ztmf_localizations/lib/assets/fr_CA.json": "c6399f148fad73281457fdbced48668e",
"assets/packages/ztmf_localizations/lib/assets/ar.json": "e21a45dc5235ef4f05da93a5360054ff",
"assets/packages/ztmf_localizations/lib/assets/nb.json": "637a01aa98c76fca96b677267ef0af80",
"assets/packages/ztmf_localizations/lib/assets/de_BE.json": "83f02c8373f989ceffe75cf8e81b6a1e",
"assets/packages/ztmf_localizations/lib/assets/es_PR.json": "82d1eb7a41101f20d1e04484b16b3871",
"assets/packages/kernel_auth/lib/assets/images/loggedOut.png": "fc8583ef4ac4fbb1aecec630b59e9f55",
"assets/packages/kernel_auth/lib/assets/images/error.png": "67e1f01a0ed0e2c897015b5fc8bad9d8",
"assets/packages/kernel_auth/lib/assets/web/teams.js": "26e82c878c453d0c7b2dc602168bab91",
"assets/shaders/ink_sparkle.frag": "506fc0a6efd277f4b7ad5d203b2e9b55",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
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
