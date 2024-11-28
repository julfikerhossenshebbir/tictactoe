// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('offline-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
  '/stylesheetjhshebbir.css',
  '/javajhshebbirscript.js',
  '/sounds/sound-1.wav',
  '/sounds/sound-2.wav',
  '/sounds/sound-3.wav',
  '/sounds/sound-4.wav',
      ]);
    })
  );
});

// Fetch Cached Content
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
