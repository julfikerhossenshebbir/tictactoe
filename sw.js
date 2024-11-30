// Service Worker Install ইভেন্ট
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('offline-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',  // আপনার HTML পেজ
        '/stylesheetjhshebbir.css',  // আপনার CSS ফাইল
        '/javajhshebbirscript.js',  // আপনার JavaScript ফাইল
        '/sounds/sound-1.wav',  // শব্দ ফাইল
        '/sounds/sound-2.wav',  // শব্দ ফাইল
        '/sounds/sound-3.wav',  // শব্দ ফাইল
        '/sounds/sound-4.wav',  // শব্দ ফাইল
      ]);
    })
  );
});

// Fetch ইভেন্ট: ক্যাশ করা কন্টেন্ট সরবরাহ করা
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Service Worker Activation (Optional, ক্যাশ আপডেট)
self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['offline-cache'];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
