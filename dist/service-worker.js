const cachableFiles = ['/', 'index.html', 'main.css', 'main.js'];
const staticCacheName = 'shell-cache-v1';

self.addEventListener('install', (event) => {
  console.log('Installing service worker and caching assets');

  event.waitUntil(
    caches
      .open(staticCacheName)
      .then((cache) => cache.addAll(cachableFiles))
  );

  self.skipWaiting;
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        )
      })
  )
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching: ', event.request.url);

  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }

        return fetch(event.request);
      })
      .then((response) => {
        // Add files to cache
        return caches
          .open(staticCacheName)
          .then((cache) => {
            console.log('Caching ', event.request.url);
            cache.put(event.request.url, response.clone());
            return response;
          })
      })
      .catch((error) => {
        // TODO - Respond with offline page.
      })
  )
}); 