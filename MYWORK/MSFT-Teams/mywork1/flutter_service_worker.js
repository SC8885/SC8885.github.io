'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f3483f754a319008b3aff0974f92e6de",
"splash/img/light-2x.png": "e1a78a3d239469ebc5c3accd8dcdc950",
"splash/img/dark-4x.png": "8998f32fb21f9e80663289efece22580",
"splash/img/light-3x.png": "14c7c7b590f5b9117a12b30c3a13a474",
"splash/img/dark-3x.png": "14c7c7b590f5b9117a12b30c3a13a474",
"splash/img/light-4x.png": "8998f32fb21f9e80663289efece22580",
"splash/img/dark-2x.png": "e1a78a3d239469ebc5c3accd8dcdc950",
"splash/img/dark-1x.png": "f9afcea9c1273e7aa6c5e75c7f1d9828",
"splash/img/light-1x.png": "f9afcea9c1273e7aa6c5e75c7f1d9828",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c94c38ff00a9d487c353a2d78989ea08",
"index.html": "e31814c61b6378a41492f454eb0221ab",
"/": "e31814c61b6378a41492f454eb0221ab",
"main.dart.js": "c47632704459af362dfe8162255284e1",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "fc0ecd0279a18f120903ce1f3ef819fd",
"icons/Icon-192.png": "e644b20788886f926b303c7641bb1ed0",
"icons/Icon-maskable-192.png": "e644b20788886f926b303c7641bb1ed0",
"icons/Icon-maskable-512.png": "1e06c44de032091792a510352a37aa0a",
"icons/Icon-512.png": "1e06c44de032091792a510352a37aa0a",
"manifest.json": "a9204488e05b1d0ea09f886541285906",
"assets/images/splash.png": "fef462c95db1506965f6339e30c7254f",
"assets/AssetManifest.json": "aa20e78a9da49b6d220d7ce7f94d17f2",
"assets/NOTICES": "5dcb6ecb0a1e23874511e8632a86c918",
"assets/FontManifest.json": "c70136fab5b190961cb3da63fbcd71f4",
"assets/AssetManifest.bin.json": "250ab0ad6245ea3c0f8f7a9ae84cee4c",
"assets/packages/ztmf_responder/images/table_image.png": "78a26c2443ba9c324863558aef358802",
"assets/packages/ztmf_responder/images/row_image.png": "b9db8a2c4f93705be71db2b114c8959c",
"assets/packages/giphy_get/assets/img/GIPHY_light.png": "7c7ed0e459349435c6694a720236d5f4",
"assets/packages/giphy_get/assets/img/poweredby_dark.png": "e4fe68503ab5d004deb31e43636a0a7c",
"assets/packages/giphy_get/assets/img/poweredby_light.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/giphy_get/assets/img/GIPHY_dark.png": "13139c9681ad6a03a0f4a45030aee388",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d0cf1c7ed47289a96e4c5f2b995e1a8d",
"assets/packages/zeta_flutter/lib/src/assets/fonts/IBMPlexSans-Medium.otf": "6ea277ff8637af42ff46683e7b4e0d63",
"assets/packages/zeta_flutter/lib/src/assets/fonts/IBMPlexSans-Light.otf": "72ed01a73518190d1c5d36042b37a626",
"assets/packages/zeta_flutter/lib/src/assets/fonts/IBMPlexSans-Regular.otf": "05b9240dd80b2276729426b2be2e9947",
"assets/packages/reflexis_ui/lib/assets/strings/zh.json": "1f02e6eee7db919ee6152b9c65e5347e",
"assets/packages/reflexis_ui/lib/assets/strings/tr.json": "0f2ae85adb3cf48020fb6abca7a75fe2",
"assets/packages/reflexis_ui/lib/assets/strings/mk.json": "3f613dca0107bc5174e24bd10ac86cac",
"assets/packages/reflexis_ui/lib/assets/strings/sl.json": "8a315bb8e782b5711f0ec0812768dc4d",
"assets/packages/reflexis_ui/lib/assets/strings/hu.json": "e32924ab801228dc5b78ae9e3feec2eb",
"assets/packages/reflexis_ui/lib/assets/strings/lt.json": "86591fe0db5989c4ce936141f02e4bbf",
"assets/packages/reflexis_ui/lib/assets/strings/zh_HK.json": "1f02e6eee7db919ee6152b9c65e5347e",
"assets/packages/reflexis_ui/lib/assets/strings/fr_BE.json": "82b361dd05ed2c874227e088ce4b6cd3",
"assets/packages/reflexis_ui/lib/assets/strings/es_ES.json": "0ccde6d4b498976f14c759b68b1199f3",
"assets/packages/reflexis_ui/lib/assets/strings/nl.json": "a661e1875d7c4153266ed13aaa525901",
"assets/packages/reflexis_ui/lib/assets/strings/de_AT.json": "1fd1ce18dfee70934e09b3814163b9ca",
"assets/packages/reflexis_ui/lib/assets/strings/es_PE.json": "cbf0b5d70fd096cf17614543ca7f34cb",
"assets/packages/reflexis_ui/lib/assets/strings/ja.json": "d04419c8bace19888026f4b426a42339",
"assets/packages/reflexis_ui/lib/assets/strings/de.json": "1fd1ce18dfee70934e09b3814163b9ca",
"assets/packages/reflexis_ui/lib/assets/strings/es_CL.json": "683ad58a7dfe4e3b97013bb34a831ef6",
"assets/packages/reflexis_ui/lib/assets/strings/ru.json": "73b652bf3399fe926d07d5c3b2380621",
"assets/packages/reflexis_ui/lib/assets/strings/pl.json": "148f33d51aa5c1545ab3ce79cf1d362b",
"assets/packages/reflexis_ui/lib/assets/strings/uk.json": "93aaac3aefe3c899a2773e2339689a57",
"assets/packages/reflexis_ui/lib/assets/strings/en_CA.json": "6b8b64ce8e52b4108f63b91a78f72881",
"assets/packages/reflexis_ui/lib/assets/strings/fi.json": "72e346e1adca93961e211eee99fe2e29",
"assets/packages/reflexis_ui/lib/assets/strings/fr_CH.json": "82b361dd05ed2c874227e088ce4b6cd3",
"assets/packages/reflexis_ui/lib/assets/strings/sk.json": "0773635cb9b849cfd53b3d61bcfee190",
"assets/packages/reflexis_ui/lib/assets/strings/pt.json": "03d00ef9132511df297b2ffe5803fed1",
"assets/packages/reflexis_ui/lib/assets/strings/en.json": "16982da0f9127b2297a60635b538098c",
"assets/packages/reflexis_ui/lib/assets/strings/ka.json": "82db3c631da01221c725606134098ed7",
"assets/packages/reflexis_ui/lib/assets/strings/it.json": "8e2165f3e16e68d50af1e3276cbc3b0d",
"assets/packages/reflexis_ui/lib/assets/strings/sr.json": "df0d62ff7ded5a123f66bdbc9c4b02d8",
"assets/packages/reflexis_ui/lib/assets/strings/hr.json": "e2e9f3a653eb890dad1427822be85486",
"assets/packages/reflexis_ui/lib/assets/strings/tl.json": "72363047e26c2554c35fca2e3da57ece",
"assets/packages/reflexis_ui/lib/assets/strings/es_EC.json": "cbf0b5d70fd096cf17614543ca7f34cb",
"assets/packages/reflexis_ui/lib/assets/strings/en_GB.json": "de3fd1a53e834a14ad2c17436eff42be",
"assets/packages/reflexis_ui/lib/assets/strings/de_CH.json": "aa4604e20f60fb3a28acf876d73b8004",
"assets/packages/reflexis_ui/lib/assets/strings/sq.json": "5698c8a76b5637a9e472c6a26f3d7e1b",
"assets/packages/reflexis_ui/lib/assets/strings/in.json": "49a8352695f13a207d252b4c6aaeb893",
"assets/packages/reflexis_ui/lib/assets/strings/bs.json": "2f79049e99b4ee510c968ea8a2a69d75",
"assets/packages/reflexis_ui/lib/assets/strings/fr.json": "fc8fff7ac6818fdef87856fb5bc07cc0",
"assets/packages/reflexis_ui/lib/assets/strings/el.json": "d95ba48f66032932dfbd54fa77335a2a",
"assets/packages/reflexis_ui/lib/assets/strings/bg.json": "37f9d826dba6379675a6d8551701ff7d",
"assets/packages/reflexis_ui/lib/assets/strings/ro.json": "b0e52c2d956a3f2e817ee21232fbbae9",
"assets/packages/reflexis_ui/lib/assets/strings/ko.json": "4cb2c8e33cc12ed2c841952099d3df28",
"assets/packages/reflexis_ui/lib/assets/strings/vi.json": "b34fd9c8d03974105860271fcebeeaef",
"assets/packages/reflexis_ui/lib/assets/strings/cs.json": "41ece07d64591f43769d29a3ed0b2b6b",
"assets/packages/reflexis_ui/lib/assets/strings/pt_BR.json": "40e7e26712cb5be2659fadd6122f36f4",
"assets/packages/reflexis_ui/lib/assets/strings/lv.json": "cf79952d73cef0a980d4f8331e00e279",
"assets/packages/reflexis_ui/lib/assets/strings/da.json": "b236b918b6f96a0bea26ecae60b97c1e",
"assets/packages/reflexis_ui/lib/assets/strings/th.json": "92b67ffe91552f210d91b90ae2781aa4",
"assets/packages/reflexis_ui/lib/assets/strings/sv.json": "58992f319a45f9e74465eeb129b697c1",
"assets/packages/reflexis_ui/lib/assets/strings/es_UY.json": "cbf0b5d70fd096cf17614543ca7f34cb",
"assets/packages/reflexis_ui/lib/assets/strings/es.json": "2cea915971204653af444a44ff29ec2e",
"assets/packages/reflexis_ui/lib/assets/strings/fr_CA.json": "8117c9882d61221053779915b881eb9c",
"assets/packages/reflexis_ui/lib/assets/strings/ar.json": "8aaa5f382fd30eabb2ff696d93c9b401",
"assets/packages/reflexis_ui/lib/assets/strings/nb.json": "95b63c950e9a76fbd8d16b5a9c7ff983",
"assets/packages/reflexis_ui/lib/assets/strings/de_BE.json": "2332bab9b5eafad9acc27d0d0b7dfc04",
"assets/packages/reflexis_ui/lib/assets/strings/es_PR.json": "cbf0b5d70fd096cf17614543ca7f34cb",
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
"assets/packages/reflexis_ui/lib/assets/fonts/selection.json": "2b14689ffb75de2228f6ca52df80f42f",
"assets/packages/reflexis_ui/lib/assets/fonts/zds.ttf": "8c52b9a63a0b7b8edf9b9ec96bdb43dd",
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
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/packages/ztmf_localizations/lib/assets/zh.json": "7d6e709d3e9010ad7e43c5d6539c02d2",
"assets/packages/ztmf_localizations/lib/assets/tr.json": "92e35a9874afd3ce5a0f13da3d5dbb40",
"assets/packages/ztmf_localizations/lib/assets/mk.json": "308776186ee72d33498e2b898901775a",
"assets/packages/ztmf_localizations/lib/assets/sl.json": "6283507f4103d5909da00ee82c8f0b0e",
"assets/packages/ztmf_localizations/lib/assets/hu.json": "0cdc0a4b5d0c0810077068af79e40eab",
"assets/packages/ztmf_localizations/lib/assets/lt.json": "4e82ca132da04dcc7afaa409d55985a2",
"assets/packages/ztmf_localizations/lib/assets/zh_HK.json": "d39ed90c35b33404c9d5253a7a5b1d1b",
"assets/packages/ztmf_localizations/lib/assets/fr_BE.json": "78c0722120b13d988c508c5a2397eae9",
"assets/packages/ztmf_localizations/lib/assets/es_ES.json": "8080cc5ecb8562866739599d8050d512",
"assets/packages/ztmf_localizations/lib/assets/nl.json": "5e639e89724fd4297dfa6dbac27d0087",
"assets/packages/ztmf_localizations/lib/assets/de_AT.json": "428ebc77e93705b1d288bcbc3ee3ffd1",
"assets/packages/ztmf_localizations/lib/assets/es_PE.json": "5ca0840864a9eea8528b6adc657bd5e9",
"assets/packages/ztmf_localizations/lib/assets/ja.json": "cb1cb172821432cbe90130e3bf633957",
"assets/packages/ztmf_localizations/lib/assets/de.json": "64628ae118250f79ee6dc2a9dfe5a11f",
"assets/packages/ztmf_localizations/lib/assets/es_CL.json": "e2018aac317956e40fc95c20d3fe5363",
"assets/packages/ztmf_localizations/lib/assets/ru.json": "9fa0bb6f3d4f241712ae982d168e1d87",
"assets/packages/ztmf_localizations/lib/assets/pl.json": "3f401aa39cc889d4bd7dfb6b077b5e2c",
"assets/packages/ztmf_localizations/lib/assets/uk.json": "c4f9e4ad459f8d1e35fea7479eaac372",
"assets/packages/ztmf_localizations/lib/assets/en_CA.json": "b6c4c71e6afbd21e1e537fe220535563",
"assets/packages/ztmf_localizations/lib/assets/fi.json": "1a23dc62bd761496122638342f70dd19",
"assets/packages/ztmf_localizations/lib/assets/fr_CH.json": "7d755dacabd7e86e4223f0dae6f31abb",
"assets/packages/ztmf_localizations/lib/assets/sk.json": "e0847612836ef3bb8d878281f333961b",
"assets/packages/ztmf_localizations/lib/assets/pt.json": "b7dc8800b9990973293810a3df9e1164",
"assets/packages/ztmf_localizations/lib/assets/en.json": "6d920e237ff86eed6b23df491b4fa193",
"assets/packages/ztmf_localizations/lib/assets/ka.json": "93b89a7d57119fab9afb367a03337c00",
"assets/packages/ztmf_localizations/lib/assets/it.json": "e8b3db0a3393e6e7586d9cfe27901b74",
"assets/packages/ztmf_localizations/lib/assets/sr.json": "839892dfe8ad86d790f12b67f23ef734",
"assets/packages/ztmf_localizations/lib/assets/hr.json": "3a4711aa8488b80dcc6ea9bfd150d47d",
"assets/packages/ztmf_localizations/lib/assets/tl.json": "1f5d91509426f7378e27cc344b06d4c5",
"assets/packages/ztmf_localizations/lib/assets/es_EC.json": "a7f6fa196a678f9ad3ac868f9de8abfe",
"assets/packages/ztmf_localizations/lib/assets/en_GB.json": "4df661cae93a2c918b55d33b1dd9b698",
"assets/packages/ztmf_localizations/lib/assets/de_CH.json": "8ced1e28e70f17131058aa4e6666e17c",
"assets/packages/ztmf_localizations/lib/assets/sq.json": "794bbacba6bb39181cdaf97751e24103",
"assets/packages/ztmf_localizations/lib/assets/in.json": "e12b1fa4d5d6fbd8c81a06597aa687b5",
"assets/packages/ztmf_localizations/lib/assets/bs.json": "8e5fa19b892755b685df506cf075f81f",
"assets/packages/ztmf_localizations/lib/assets/fr.json": "47c93df5302576dc8dc1d014714f444f",
"assets/packages/ztmf_localizations/lib/assets/el.json": "c19821ce0100488ab397aaf8d16e2c41",
"assets/packages/ztmf_localizations/lib/assets/bg.json": "0aa4ebee51ffe1a8d50034739cd989d9",
"assets/packages/ztmf_localizations/lib/assets/ro.json": "ac6b291bb0c52e05a9d92020c551dccb",
"assets/packages/ztmf_localizations/lib/assets/ko.json": "4b4d01c9be221d3148d72fe234014ca2",
"assets/packages/ztmf_localizations/lib/assets/vi.json": "0567917994cbe1d5afd5734b1bdbfa1a",
"assets/packages/ztmf_localizations/lib/assets/cs.json": "0aac568eea184ac07e0b3e9da9009978",
"assets/packages/ztmf_localizations/lib/assets/pt_BR.json": "8bda37d8697884a3e44d17197e210808",
"assets/packages/ztmf_localizations/lib/assets/lv.json": "a782586b09753e8b2d461cf7d23469de",
"assets/packages/ztmf_localizations/lib/assets/da.json": "eee0cb487a96ae44c05ca755374f5f32",
"assets/packages/ztmf_localizations/lib/assets/th.json": "c8dca00743fe2f464606fe5c704c246a",
"assets/packages/ztmf_localizations/lib/assets/sv.json": "c8958bf4714fa86f5ec1ff50115f246b",
"assets/packages/ztmf_localizations/lib/assets/es_UY.json": "21543640ef3d11610d14cf862748aa28",
"assets/packages/ztmf_localizations/lib/assets/es.json": "0c1e3da4072f666b3f6dc28f5556be87",
"assets/packages/ztmf_localizations/lib/assets/fr_CA.json": "fe61ddd7ca18427e2501da35ded9cbc2",
"assets/packages/ztmf_localizations/lib/assets/ar.json": "de72b9b3a39ad8deee01d1b074a34fc5",
"assets/packages/ztmf_localizations/lib/assets/nb.json": "dc73437f0c3f649beaed360f399b20ff",
"assets/packages/ztmf_localizations/lib/assets/de_BE.json": "b90a00812e1741167325113485c34cfc",
"assets/packages/ztmf_localizations/lib/assets/es_PR.json": "22ac5ad3bebb1c9fe7352e065f2a52aa",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/camerawesome/assets/icons/1_1.png": "9fccda0fa73f4e7870fc9db46a61b8f5",
"assets/packages/camerawesome/assets/icons/16_9.png": "ee01c5857314518ac7f3e31d891ae436",
"assets/packages/camerawesome/assets/icons/4_3.png": "0091aca9a18eb33b968ec3abf62699a3",
"assets/packages/camerawesome/assets/icons/minimized.png": "1589a3aefe13c85c8bf2296863881c3d",
"assets/packages/camerawesome/assets/icons/expanded.png": "b8bce8882199b9e134b7b2d102317d3a",
"assets/packages/kernel_auth/lib/assets/images/loggedOut.png": "fc8583ef4ac4fbb1aecec630b59e9f55",
"assets/packages/kernel_auth/lib/assets/images/error.png": "67e1f01a0ed0e2c897015b5fc8bad9d8",
"assets/packages/kernel_auth/lib/assets/web/teams.js": "7ef1bebc99487e0b5cdbab3cf235921d",
"assets/packages/kernel_auth/lib/assets/web/mock-teams.js": "703d641fd0bc28bc8f20118ed98790e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a120ad535bdae7dd27bcd26820708ac6",
"assets/fonts/MaterialIcons-Regular.otf": "735c17497fc97702990fc2f62361ef15",
"assets/assets/config.json": "65b32bd64130c76ce13eebbaa8d20aea",
"assets/assets/colors.json": "a3031ed0a37aaa33718c7dc8261f55b4",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
