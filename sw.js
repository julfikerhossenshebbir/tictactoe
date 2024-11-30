const CACHE_NAME = "pwa-cache-v1";
const CACHE_ASSETS = [
  "./",
  "./index.html",
  "./stylesheetjhshebbir.css",
  "./javajhshebbirscript.js",
  "./sounds/sound-1.wav",
  "./sounds/sound-2.wav",
  "./sounds/sound-3.wav",
  "./sounds/sound-4.wav"
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching files");
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

// Activate Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Clearing old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
