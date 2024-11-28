const CACHE_NAME = "webgame-cache-v1";
const urlsToCache = [
  "/index.html",
  "/stylesheetjhshebbir.css",
  "/javajhshebbirscript.js",
  "/sounds/sound-1.wav",
  "/sounds/sound-2.wav",
  "/sounds/sound-3.wav",
  "/sounds/sound-4.wav"
  ];

// Install Service Worker and Cache Files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch Cached Files or Fallback to Network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Activate Service Worker and Remove Old Caches
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
