const CACHE_NAME = "dice-roller-cache-v1";
const urlsToCache = [
"./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icon-192x192.png",
  "./icon-512x512.png"
];

// Instala o Service Worker e armazena os arquivos no cache

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Busca os recursos do cache quando estiver offline

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Atualiza o cache quando houver mudanças

self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) =>
        Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    );
});