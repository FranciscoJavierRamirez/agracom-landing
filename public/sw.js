// Service Worker placeholder
// This is a minimal service worker for future PWA features

const CACHE_NAME = 'agracom-v1';
const urlsToCache = [
  '/',
  '/en/',
  // CSS files are automatically handled by Astro/Vite - no manual caching needed
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});