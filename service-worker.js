const CACHE_NAME = "dice-roller-cache-v1";
const urlsToCache = [
  "https://camiladdev.github.io/dice-roller",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/icon-192.png",
  "/icon-512.png"
];

// Instalar o Service Worker e armazenar em cache os arquivos
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Buscar arquivos no cache
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Atualizar o cache quando houver mudanças
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
