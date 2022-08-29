'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2efa8f93189d9edcc42b6a183b0dfc88",
".git/config": "025f1647fe8be1cf852ecab921d09ffb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "26ef74bf474dee6ed9d33c7a357d3cee",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-checkout": "2c55244d9d6cd2e8208263ac9befd326",
".git/hooks/post-commit": "fd2127fc0192762cd927e4d061b29b42",
".git/hooks/post-merge": "1c75281027dd3a47e6d2133d2c07c2ba",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push": "43e1c8572c8fefa9e3e217e08afda6dd",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dcbf35b68b1defaf2a6dc0e7774c341d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/lfs/cache/locks/refs/heads/main/verifiable": "91188ef767ae3a3a42e92f1706f161d0",
".git/lfs/objects/64/9b/649b9a80ad531b94e3799bfff8b6487cdd0ea9e0b6ebc066126ed3414fa48834": "58ffe9e22718735ff1277ad8da7bfaa2",
".git/logs/HEAD": "6a8a30af244b4c5cfa7bfa84db000ffc",
".git/logs/refs/heads/main": "f06ef76c82cf7f5b1448da22bed6bcae",
".git/logs/refs/remotes/origin/main": "37ea381dc9c67e11748cfc25b9f02d16",
".git/objects/03/585d0f4ce003e7bb1428ad2ae9abd24ff95c41": "0d5cdd6be7f7966b19de647974e01afd",
".git/objects/06/1ee77c8829bb6a39b213293658e7ec3bdc33a5": "a51af9598a3d78560eb097cc0c6c21a5",
".git/objects/06/27408453425424ce6e244c99c75b2a531484c6": "5560a3e47451c5110cea4ad7b7a3c664",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/5c102b662f5ac2ecedac7f87647becdd4bef31": "5285647998b7de873584d4e1c4a52f0a",
".git/objects/10/c267753fe6d1a6649f628b6fbb3b1a169692c0": "55e71c1cf81b759f5df5dc3eb9d767d9",
".git/objects/17/f97f09bf4df1d2d95ff9c68de710311185f70a": "de008b11567c5823d122a6737759c250",
".git/objects/18/33f7a3442571e538327b17fbfdbf98a2c5c2bf": "9bfc78549ef0dab99ee83bd7f8a92083",
".git/objects/18/b6821fae2f40731e0fbb10fbd106b1bd2655dd": "2a4723f65d3f59ae83b1509deaea4755",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/bfb5763c0a046a2d72861e41cc83070519ba9d": "c6f5ac71aac1f08102c652f73af06631",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/5e/fa4c75f8faef1bf7c883bc73970c63e9459980": "bb844d934d4f8427e582aedb1ff37814",
".git/objects/64/38560258ad911b6d2537202d88bd316da325e3": "527a55919a2dbff7928b421dd00d10cf",
".git/objects/65/f781266284b47315f84c997f8a56adf162a620": "761e72a22e37f5b9b8f4a625ba9b1c82",
".git/objects/6c/4c98ebaaa437aebb8f11b095bfc15afd47b46c": "2ecaa5c8129f8e9086be4eda716b627c",
".git/objects/6f/5c53f83a07b4fb2eaa20cc685f081e4088af7b": "0316adc897e55c4399a0b1ed8fe21c60",
".git/objects/73/06cf237a5bce4ae46661a41cd41011c66b6f3c": "7d0ada176b11fa30235881afffa4ac27",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/cd40a4dc6402681c17948ce857e83f1074be79": "bc9dfa3600cb84e99f168e5b422af61d",
".git/objects/80/1cf9fbb9ce43a4c5732bfb6857a49e551a7ef6": "d5258c52b7e0bb0569bdbbf029c6ffd9",
".git/objects/82/58c4d8707980424debaf39bd23be4aecfefe99": "7213c4dbde50892a82cc9c02de20a526",
".git/objects/86/887290d67efe07faa4810a8b7334e9bf566d72": "d16cbcf46bdc05b972de98cb47d23281",
".git/objects/89/f5a6f4a8cdff544e5671918219a7652393d130": "c36f69ea533c5d9723b30fe586aeda12",
".git/objects/92/5bc0d620b6b409ce041e51b5d52d49937fcd40": "a9d0c727c2974461bec020a3198b47ba",
".git/objects/92/c711b9fe69cb364cc6db75f906930450ff0bed": "da61324323801538c1ac33398bd780e0",
".git/objects/95/76d1f5730f20e2a3db4f8416d18bb1ccb215c4": "433c22631f3950c79f77f51a1edf3663",
".git/objects/9b/31d4b75505ae04dc5048377559737a3c0d4045": "298176faa9adc8f1661ae751e8140479",
".git/objects/9e/b81f5f8bb1bdf80382c19cbe2cfd2afaf3beec": "47cea3e428aa66e73b13e8d1a0deaf9e",
".git/objects/9f/ecff91fe4dacd8b22b1114676dc946b0e79bd6": "d3d1bff1a2a925e4e526905921d138c2",
".git/objects/a0/1b8312ccd6f0e5badb178242434e93a9bd4ef6": "467a70a112157307830b423cc5d9235a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/aeb504e5ecbe63d2a874f02b5771cb1184e1bd": "3ad648a730619c22cf97d2d5aea77b33",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/edd1c5df66c848a26c002f72282dec88a5b49c": "ce46b21ffea0705666c258ca9b718d93",
".git/objects/ae/487bfc113054e77840929ab95f818329b40794": "df996948433949d75d778852c26bbaf5",
".git/objects/ae/78748ce64f69d183052910d62176f083340532": "4e561d4e63ac59cf2a3a1e0bc54fa758",
".git/objects/af/a16adce8a1215ece0f752c4985f31c3ae5b1b0": "9f393402368afbc2e9e3d3e374946371",
".git/objects/b4/1413afc68b6b1578f7a0e799357ef69f8eb63e": "7da183839437f4855bb4971999a50ff4",
".git/objects/b7/c8f8808c9a87bbd1887585ae020426aa20dc20": "7bbc2dd106fb23ffc668e4bc53212422",
".git/objects/bd/d37f335801139bad15f585fcc9786e3314a3b8": "8505b18d27185902902c73e8a219733e",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/2de1b677729a24fd6797e6e64805c5e59c8748": "1bcc44734cba575f357643f2e8743c1d",
".git/objects/d4/59ab8b9f314ebe8b7895820df9b8f1b2da8842": "4185392e83afcd49bbf5d987f0b991ad",
".git/objects/d8/d08b761b543d62b121ef0895f4deaf65c2455d": "b8e9e6ebe21b68495a91f195f1e3204c",
".git/objects/da/51d8597e9fcbc572c2027241dce4a46fdd9e86": "91ef5d28541f10b36ee9d4824b53ae82",
".git/objects/dc/ce2ddf2316fb4c9d1fc5829bc16a3dcc6cfec8": "c04814c32560fe3fbc5d20e2fec3a367",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/de065be9eadc61351b2987c82043dacc70f162": "4ccf7e11910feaaeceee2cb6d036c440",
".git/objects/e2/a692c5cf55cf17cab8418db691f1fff149a076": "224f9038c039b63e3031007c96866331",
".git/objects/e4/ada9a70323b6f9b45bc7b0c3deeca7f7795b2f": "1cc74231f323ab13a4682ffe6123c74b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/3ba304c4d7193f65ff307ee01c8055f3926f7a": "b1b2498c573c7435a8d37b2844bb4bfa",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ed/14bcd3a05603a5c3fdb8eba6b10bf59066d11a": "21bb5042a13974e6fce399f343236c55",
".git/objects/f9/3210e688c75b7b316bc9344a86c12d680299a2": "1486a8359ef3e9b68ebe1846092b6d64",
".git/objects/f9/591cd4dba328ab4415489a3941fc074c60137f": "26cedf509d0d2d314eb60c8f575a59f4",
".git/ORIG_HEAD": "6e2923b45dc1c588a2b94da13b6321ce",
".git/refs/heads/main": "677cac023e1a37ab3430521db282db4b",
".git/refs/remotes/origin/main": "677cac023e1a37ab3430521db282db4b",
"app-ads.text": "24f82cc9335b3596d6843417c4715473",
"assets/AssetManifest.json": "7ac6c1c7d9d1c56bd5a522b00d9bbfdd",
"assets/assets/app-release.apk": "58ffe9e22718735ff1277ad8da7bfaa2",
"assets/assets/ss1.png": "8b5500e3e47345640b3fe9abf119f18b",
"assets/assets/ss2.png": "fa7c7a5e2c5face56a4d25717e75a922",
"assets/assets/ss3.png": "189b9f30915c98877f3ebcc7def19ddb",
"assets/assets/ss4.png": "65d68847af6b0ea3bec1392dd9e01bc1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a0ab77e2d512399c36805a856c08fee7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "ecd91111ef028c0601a520e9438bea17",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "2ed53bf93e1024217fe54d752f395c2e",
"icons/Icon-512.png": "79a4bfd5292ed26fcf276da81a7f9062",
"icons/Icon-maskable-192.png": "e054cd65f84405fc1f5ce4715f2ebd38",
"icons/Icon-maskable-512.png": "79a4bfd5292ed26fcf276da81a7f9062",
"index.html": "d00f25f31b719d8a8d9cc9ba1047133c",
"/": "d00f25f31b719d8a8d9cc9ba1047133c",
"main.dart.js": "7c61f43db4206a57d3922f861ff97518",
"manifest.json": "84eef160b91ac2071611ef20808fd762",
"version.json": "2a4a3610ca4d946cf9b53ecb0523530d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
