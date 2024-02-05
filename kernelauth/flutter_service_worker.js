'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "51ae1f2e1c69591df8b2936defbfe4d8",
"index.html": "297b6b394d1136590234313a4cb50828",
"/": "297b6b394d1136590234313a4cb50828",
"main.dart.js": "c74fc8fb31032c3cafde1123f35699e0",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0e5f95517503ed72cdf44fc1f2ae3a97",
"assets/images/splash.png": "fef462c95db1506965f6339e30c7254f",
"assets/AssetManifest.json": "f02ce937f0bf415ae4e15377043246b1",
"assets/NOTICES": "64ba3c262fac5996b2e19b1094ca1dbf",
"assets/FontManifest.json": "ffa4db5dbe5d25aa407411f6c3e0b242",
"assets/packages/giphy_get/assets/img/GIPHY_light.png": "7c7ed0e459349435c6694a720236d5f4",
"assets/packages/giphy_get/assets/img/poweredby_dark.png": "e4fe68503ab5d004deb31e43636a0a7c",
"assets/packages/giphy_get/assets/img/poweredby_light.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/giphy_get/assets/img/GIPHY_dark.png": "13139c9681ad6a03a0f4a45030aee388",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/zeta_flutter/lib/src/assets/fonts/IBMPlexSans-Medium.otf": "6ea277ff8637af42ff46683e7b4e0d63",
"assets/packages/zeta_flutter/lib/src/assets/fonts/IBMPlexSans-Light.otf": "72ed01a73518190d1c5d36042b37a626",
"assets/packages/zeta_flutter/lib/src/assets/fonts/IBMPlexSans-Regular.otf": "05b9240dd80b2276729426b2be2e9947",
"assets/packages/reflexis_ui/lib/assets/strings/zh.json": "179c47523e50d22a0fae7fdbc372f1e9",
"assets/packages/reflexis_ui/lib/assets/strings/tr.json": "a6ce7746d3a8ea226f935f2c1c0423f7",
"assets/packages/reflexis_ui/lib/assets/strings/mk.json": "b8cab4d37b675cc60509b02dd75e3814",
"assets/packages/reflexis_ui/lib/assets/strings/sl.json": "88d61550045ea637634d09b4c11c5bf0",
"assets/packages/reflexis_ui/lib/assets/strings/hu.json": "c5c4f10c8d91856667fbb2abdd822243",
"assets/packages/reflexis_ui/lib/assets/strings/lt.json": "ea73232e10903fe3e629e0bcb35bac09",
"assets/packages/reflexis_ui/lib/assets/strings/zh_HK.json": "179c47523e50d22a0fae7fdbc372f1e9",
"assets/packages/reflexis_ui/lib/assets/strings/fr_BE.json": "67e2cf996c99437ebd23d6ca890195f7",
"assets/packages/reflexis_ui/lib/assets/strings/es_ES.json": "ed8cac7d9abe91cf7dd540812748583c",
"assets/packages/reflexis_ui/lib/assets/strings/nl.json": "8cbb6e9c1747f003b463543fcabd069d",
"assets/packages/reflexis_ui/lib/assets/strings/de_AT.json": "c4abbbc046be9729d1c15188a8153bf1",
"assets/packages/reflexis_ui/lib/assets/strings/es_PE.json": "515086f97977bf9d5b1053d3e25495f2",
"assets/packages/reflexis_ui/lib/assets/strings/ja.json": "d076d3ddd808e2ccf57b1d872032ef8c",
"assets/packages/reflexis_ui/lib/assets/strings/de.json": "c4abbbc046be9729d1c15188a8153bf1",
"assets/packages/reflexis_ui/lib/assets/strings/es_CL.json": "0711d7ffc5342e298bf041451716bbf1",
"assets/packages/reflexis_ui/lib/assets/strings/ru.json": "56c4c6209b90dfa011c4c2ba3a956d50",
"assets/packages/reflexis_ui/lib/assets/strings/pl.json": "0fa09abb75473c4b574c69b6c2afecf8",
"assets/packages/reflexis_ui/lib/assets/strings/uk.json": "838ebc0e23068c61cc3031de7ac08795",
"assets/packages/reflexis_ui/lib/assets/strings/en_CA.json": "7e032e0aa74861756c3c85dcf8dd2aea",
"assets/packages/reflexis_ui/lib/assets/strings/fi.json": "cad979a22efa046cee8a64f9cc11f8a5",
"assets/packages/reflexis_ui/lib/assets/strings/fr_CH.json": "67e2cf996c99437ebd23d6ca890195f7",
"assets/packages/reflexis_ui/lib/assets/strings/sk.json": "d4fc31a185e87117f39820ef9765a254",
"assets/packages/reflexis_ui/lib/assets/strings/pt.json": "5cc44fe1bd7257b2f358776ed9ea08e8",
"assets/packages/reflexis_ui/lib/assets/strings/en.json": "85a5e67a53273e2f63e61af6eefe0d30",
"assets/packages/reflexis_ui/lib/assets/strings/ka.json": "76e624fff90268f89641a2ebe6d6eb3d",
"assets/packages/reflexis_ui/lib/assets/strings/it.json": "cca4a80dbd78c471894b9d04073a24e4",
"assets/packages/reflexis_ui/lib/assets/strings/sr.json": "65ce667b37b4075f90e1a260eb8820d8",
"assets/packages/reflexis_ui/lib/assets/strings/hr.json": "ac45c5b0542dee72338aefc00652d58b",
"assets/packages/reflexis_ui/lib/assets/strings/tl.json": "4ca87d39913a55751d3746507b100485",
"assets/packages/reflexis_ui/lib/assets/strings/es_EC.json": "515086f97977bf9d5b1053d3e25495f2",
"assets/packages/reflexis_ui/lib/assets/strings/en_GB.json": "884d1c46e30d304f207e4f1bf0e7fef2",
"assets/packages/reflexis_ui/lib/assets/strings/de_CH.json": "675d3ae01eed9a61b52e72665d5f9bd4",
"assets/packages/reflexis_ui/lib/assets/strings/sq.json": "a136e2ff78526b56f2cd3528c5e8ceea",
"assets/packages/reflexis_ui/lib/assets/strings/in.json": "01bc53ba2f17e34b71905455a6873798",
"assets/packages/reflexis_ui/lib/assets/strings/bs.json": "f60ef5ba62887663cf8fcf2967ce0254",
"assets/packages/reflexis_ui/lib/assets/strings/fr.json": "f19d76590b2484fd41cf66b374b15f33",
"assets/packages/reflexis_ui/lib/assets/strings/el.json": "3c839c1b07d346be820b2f841bc31834",
"assets/packages/reflexis_ui/lib/assets/strings/bg.json": "255d1894a1191b7baa7fe3cfb4b7fb35",
"assets/packages/reflexis_ui/lib/assets/strings/ro.json": "ed14f5031d4fcac5f54440bfa7892602",
"assets/packages/reflexis_ui/lib/assets/strings/ko.json": "ea3cce3beeaf0bf19c29fae1d96a1b8e",
"assets/packages/reflexis_ui/lib/assets/strings/vi.json": "8c74a9d15aaa4e460b5c4c40f12fef2c",
"assets/packages/reflexis_ui/lib/assets/strings/cs.json": "00a29fb7f316dca0f70ef5026e42ac62",
"assets/packages/reflexis_ui/lib/assets/strings/pt_BR.json": "27590330ee75268a5b8e3ff1aed8f50d",
"assets/packages/reflexis_ui/lib/assets/strings/lv.json": "eeec132c4fb3ad918daf8891a3b21997",
"assets/packages/reflexis_ui/lib/assets/strings/da.json": "c477cb6716f0c71bcdc4ff4063a7a9c4",
"assets/packages/reflexis_ui/lib/assets/strings/th.json": "77946ceaf36dca23cea392bbd3993f54",
"assets/packages/reflexis_ui/lib/assets/strings/sv.json": "bccc231ac2364ae8b4092d0c3e110df3",
"assets/packages/reflexis_ui/lib/assets/strings/es_UY.json": "515086f97977bf9d5b1053d3e25495f2",
"assets/packages/reflexis_ui/lib/assets/strings/es.json": "db971ca294e681a52b1636f4c881b0db",
"assets/packages/reflexis_ui/lib/assets/strings/fr_CA.json": "15d4ed35712fbed30f8b80bc9661e2b9",
"assets/packages/reflexis_ui/lib/assets/strings/ar.json": "a22ea070a8f24da206e32df5ed2d1771",
"assets/packages/reflexis_ui/lib/assets/strings/nb.json": "c8a3df418196e180d62837e6b0aeb604",
"assets/packages/reflexis_ui/lib/assets/strings/de_BE.json": "e9d19c2199e797a5994dbc89967c7ef0",
"assets/packages/reflexis_ui/lib/assets/strings/es_PR.json": "515086f97977bf9d5b1053d3e25495f2",
"assets/packages/reflexis_ui/lib/assets/images/search.svg": "79b7ce956cdf0a63c1af7c04be0956a2",
"assets/packages/reflexis_ui/lib/assets/images/notes.svg": "5ca34a0734c621172f00cca3e6ee7f65",
"assets/packages/reflexis_ui/lib/assets/images/light_mode.svg": "35bf879635b7d03fd4a4c806fc5d72e8",
"assets/packages/reflexis_ui/lib/assets/images/load_fail.svg": "7c751f1b6a3d324f45730a20f0645706",
"assets/packages/reflexis_ui/lib/assets/images/sleeping_zebra.svg": "7a53aa59b6dc1766d9cbb0d97116dd78",
"assets/packages/reflexis_ui/lib/assets/images/connection_loss.svg": "1863b9985e1ea5be314a78d65f0e14a4",
"assets/packages/reflexis_ui/lib/assets/images/completed_tasks.svg": "0dc32bc07940c6b4a5c9607ad7473191",
"assets/packages/reflexis_ui/lib/assets/images/map.svg": "53f3ea73003756ee0689a8500a828770",
"assets/packages/reflexis_ui/lib/assets/images/system_mode.svg": "a7c161c735b3c60f9eb474761f4a65e5",
"assets/packages/reflexis_ui/lib/assets/images/cloud_fail.svg": "8a86ae2f4b82c4adcfafaeea80bc98df",
"assets/packages/reflexis_ui/lib/assets/images/internet_fail.svg": "09c96cfc80c219c2b50a93f07384bc9a",
"assets/packages/reflexis_ui/lib/assets/images/dark_mode.svg": "4713d98cf95e46fbb9910d79c2698d3c",
"assets/packages/reflexis_ui/lib/assets/images/sad_zebra.svg": "f3c754f52a7679fb5275cb3902de459b",
"assets/packages/reflexis_ui/lib/assets/images/chat.svg": "63928d6bd7f2ac7f51a739266c91e228",
"assets/packages/reflexis_ui/lib/assets/images/server_fail.svg": "d20bc5ecaa1d0681198fd0289565f12f",
"assets/packages/reflexis_ui/lib/assets/images/empty_box.svg": "34fcee2d89e36a035a22d687e57ccfdc",
"assets/packages/reflexis_ui/lib/assets/images/clock.svg": "5c082745476181c83a94a7b11e73cacb",
"assets/packages/reflexis_ui/lib/assets/images/calendar.svg": "8f8779a6f7c1cec4fec20ae3a5b04c6d",
"assets/packages/reflexis_ui/lib/assets/images/notifications.svg": "a03c4a5e18990a6f598cc1c1c81bdaea",
"assets/packages/reflexis_ui/lib/assets/js/quill.min.js": "c2734fd6895bdfba13245fc2cda12202",
"assets/packages/reflexis_ui/lib/assets/fonts/selection.json": "4fb958f481cf91a82124f87ecb58c4ae",
"assets/packages/reflexis_ui/lib/assets/fonts/zds.ttf": "430731bb8bbe7d6c8d0593bf0a7b11fb",
"assets/packages/reflexis_ui/lib/assets/animations/thumbs_up_approved.json": "3d1324d15e8f9b0b656f3aca3ef460f7",
"assets/packages/reflexis_ui/lib/assets/animations/time_approved.json": "f231a4009d94c46fe7f2306496f9f70b",
"assets/packages/reflexis_ui/lib/assets/animations/time_approved_glimmer.json": "611fe564b1e7121458985e9b1f6cb8e8",
"assets/packages/reflexis_ui/lib/assets/animations/two_checks.json": "65a5bddc7a4fe4a1499be20af35c1e3c",
"assets/packages/reflexis_ui/lib/assets/animations/check_glimmer.json": "1f46d17f1bd17217ba5eb116fa290287",
"assets/packages/reflexis_ui/lib/assets/animations/thumbs_up.json": "087bcb9e38fab38104bf64a83faedba0",
"assets/packages/reflexis_ui/lib/assets/animations/approval_stamped.json": "8f6527f26ce5c233fea820941c4adab9",
"assets/packages/reflexis_ui/lib/assets/animations/check.json": "ca516f06102d727d8e25fb6fa70e747a",
"assets/packages/reflexis_ui/lib/assets/animations/check_ripple.json": "74638175550f77bd357a48de6d36e4cb",
"assets/packages/reflexis_ui/lib/assets/animations/check_circle.json": "0893f6c2feebfcd4bc66838ce67b3f06",
"assets/packages/reflexis_ui/lib/assets/animations/time_approved_box.json": "f106c3354e66fd07eb82b382e03e7066",
"assets/packages/reflexis_ui/lib/assets/animations/timecard_tapping.json": "1aa17c200fa6f3d743e4e63f61947cad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "54eacafcee97287c94d1abf36630c122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "079da706aabc2d78e87335ca125691e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/flutter_inappwebview/assets/web/web_support.js": "1c365cc5ce2a69c366034266252d2cfa",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/ztmf_localizations/lib/assets/zh.json": "276b5331eb0afa917c325897b2baff9c",
"assets/packages/ztmf_localizations/lib/assets/tr.json": "b7cce27cfdf600757e7fc8f95a0ea621",
"assets/packages/ztmf_localizations/lib/assets/mk.json": "8156208b0f7cef75d9ca3dd70ed9e789",
"assets/packages/ztmf_localizations/lib/assets/sl.json": "e13549efcaf8043e3669195048f92f39",
"assets/packages/ztmf_localizations/lib/assets/hu.json": "2d540193eef041ce80f4f530fce67a95",
"assets/packages/ztmf_localizations/lib/assets/lt.json": "759b6ae5e36867a760cd6c4dbf8b7ee3",
"assets/packages/ztmf_localizations/lib/assets/zh_HK.json": "8cabf0bdb8aed30b67844e1ce9f1da5e",
"assets/packages/ztmf_localizations/lib/assets/fr_BE.json": "e8fb127bb5bc76905b98a1cdde2e44c4",
"assets/packages/ztmf_localizations/lib/assets/es_ES.json": "294b806f3f8c096500c393a7ca7f080f",
"assets/packages/ztmf_localizations/lib/assets/nl.json": "6466340442bfc80312a1aee7c01867e6",
"assets/packages/ztmf_localizations/lib/assets/de_AT.json": "9f057deabff005083166606fcccebd34",
"assets/packages/ztmf_localizations/lib/assets/es_PE.json": "4e0ed9dcd4649f6a89f11314d30cd423",
"assets/packages/ztmf_localizations/lib/assets/ja.json": "99f278aeef07e65c60c53c465a72780c",
"assets/packages/ztmf_localizations/lib/assets/de.json": "b694b2634c31c1b223d63baa28d8ee24",
"assets/packages/ztmf_localizations/lib/assets/es_CL.json": "2cca8a11b3572708b9cc618e486288f0",
"assets/packages/ztmf_localizations/lib/assets/ru.json": "ed702174175973632f5ebfa08816c7a7",
"assets/packages/ztmf_localizations/lib/assets/pl.json": "8d0ea637ebb7d92f749d045c8576f75d",
"assets/packages/ztmf_localizations/lib/assets/uk.json": "3ba0ea475b57c1fc6515ec4ba3bacb15",
"assets/packages/ztmf_localizations/lib/assets/en_CA.json": "846aff6a47f45226b44da34cc4a15413",
"assets/packages/ztmf_localizations/lib/assets/fi.json": "0edeeecc40a6224eb95379658ef26732",
"assets/packages/ztmf_localizations/lib/assets/fr_CH.json": "0d67fb12491b0aad90755b5b1eca38e1",
"assets/packages/ztmf_localizations/lib/assets/sk.json": "4595bf7222dae604dc11c75177b45e7d",
"assets/packages/ztmf_localizations/lib/assets/pt.json": "ce52d9beec7005d60c3e5f64be9a9d35",
"assets/packages/ztmf_localizations/lib/assets/en.json": "2727574984b8a443f967fff3ee562836",
"assets/packages/ztmf_localizations/lib/assets/ka.json": "ffafc3948a58d9dad847ef7d120785da",
"assets/packages/ztmf_localizations/lib/assets/it.json": "593da9f4288e2ae9960ce0de8a1fcd93",
"assets/packages/ztmf_localizations/lib/assets/sr.json": "c2e989f3370a7b929f97730a3e4079fc",
"assets/packages/ztmf_localizations/lib/assets/hr.json": "5002eb3ecc1e72a1a721793ed41c6c42",
"assets/packages/ztmf_localizations/lib/assets/tl.json": "de1b8c424365648875396e99dde9539e",
"assets/packages/ztmf_localizations/lib/assets/es_EC.json": "b64e1d178731867ce560a129edbb1e31",
"assets/packages/ztmf_localizations/lib/assets/en_GB.json": "6c110d2d162f2ab0de5d1967e378a997",
"assets/packages/ztmf_localizations/lib/assets/de_CH.json": "ba0fec99311224e0e3282bbe858b18cc",
"assets/packages/ztmf_localizations/lib/assets/sq.json": "2ad2778a8b995ea0157db45d3c44ebcc",
"assets/packages/ztmf_localizations/lib/assets/in.json": "82a290df3275aa675b6821e96c99b6fe",
"assets/packages/ztmf_localizations/lib/assets/bs.json": "7c87377112af5345a2f36ca575e6bcc2",
"assets/packages/ztmf_localizations/lib/assets/fr.json": "6878225f2f1562e61ce6518ccf28eb50",
"assets/packages/ztmf_localizations/lib/assets/el.json": "5f844afe1eae3d5725563bf58f75dca8",
"assets/packages/ztmf_localizations/lib/assets/bg.json": "d202f1fa254b557266f57a26c352c403",
"assets/packages/ztmf_localizations/lib/assets/ro.json": "ace0414286143627815930cf4aa51695",
"assets/packages/ztmf_localizations/lib/assets/ko.json": "b46c2bc361e2efb78fc878ed76620b94",
"assets/packages/ztmf_localizations/lib/assets/vi.json": "0eee58a3d4bb9a095299c123fa8b2a25",
"assets/packages/ztmf_localizations/lib/assets/cs.json": "9ccac9c9e856751a69208875dc8a2540",
"assets/packages/ztmf_localizations/lib/assets/pt_BR.json": "7ebc8873b65a70a9ecf2f12a89672050",
"assets/packages/ztmf_localizations/lib/assets/lv.json": "f3f0f46070fa6b060451a9b37d99ba9c",
"assets/packages/ztmf_localizations/lib/assets/da.json": "f0d2e2f2d676111ac11ba37b6b3231b9",
"assets/packages/ztmf_localizations/lib/assets/th.json": "221cf6010fe354fdacebadd9a84f9cfc",
"assets/packages/ztmf_localizations/lib/assets/sv.json": "1ea1e220941647d954a7788c8f6ec7b6",
"assets/packages/ztmf_localizations/lib/assets/es_UY.json": "ea3d6c66f045d485bcad4ef7bdc93b8f",
"assets/packages/ztmf_localizations/lib/assets/es.json": "ce554c2a7b32b7139bd2ea9499781b2a",
"assets/packages/ztmf_localizations/lib/assets/fr_CA.json": "ac073e8462707375549189dc2701094d",
"assets/packages/ztmf_localizations/lib/assets/ar.json": "1a4453f30b403f36b6668db43dff8fc0",
"assets/packages/ztmf_localizations/lib/assets/nb.json": "65ded5b5aa678a44ff8f96b5e2758ac8",
"assets/packages/ztmf_localizations/lib/assets/de_BE.json": "bc382d13b6f9c548cca06bcdf5280555",
"assets/packages/ztmf_localizations/lib/assets/es_PR.json": "cc6b64205dc6368924c76ea2cd510180",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/kernel_auth/lib/assets/images/loggedOut.png": "fc8583ef4ac4fbb1aecec630b59e9f55",
"assets/packages/kernel_auth/lib/assets/images/error.png": "67e1f01a0ed0e2c897015b5fc8bad9d8",
"assets/packages/kernel_auth/lib/assets/web/teams.js": "96c1b7a90f8a23eec46e25b07ceb5ccd",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "528d29f1f813b849f4c87564e7ad002e",
"assets/fonts/MaterialIcons-Regular.otf": "bb6a72f4f8dbb57e93fe91c275d483e8",
"assets/assets/config.json": "65b32bd64130c76ce13eebbaa8d20aea",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
