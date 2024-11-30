// Cache version
const CACHE_NAME = 'offline-pwa-v1';

// Files to cache
const FILES_TO_CACHE = [
  '/',
        '/index.html',  // আপনার HTML পেজ
        '/stylesheetjhshebbir.css',  // আপনার CSS ফাইল
        '/javajhshebbirscript.js',  // আপনার JavaScript ফাইল
        '/sounds/sound-1.wav',  // শব্দ ফাইল
        '/sounds/sound-2.wav',  // শব্দ ফাইল
        '/sounds/sound-3.wav',  // শব্দ ফাইল
        '/sounds/sound-4.wav',  // শব্দ ফাইল
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching files');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
