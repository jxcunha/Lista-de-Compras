
// Nome do cache
const CACHE_NAME = 'lista-compras-cache-v1';

// Arquivos para cachear
const urlsToCache = [
  '/',
  '/index.html',
  '/Carrinho.png',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
