const CACHE_NAME = 'pwa-cache-v1';

// Lista de URLs que quieres precachear en la instalación
const ASSETS = [
    '/',                         // tu página principal
    '/index.html',
    '/manifest.webmanifest',
    '/icon-192x192.png',
    '/icon-512x512.png',
    // añade aquí cualquier otro asset estático que tengas
];

// Instalación: abro el cache y agrego ASSETS
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activación: limpio caches antiguos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

// Fetch: primero intento cache, luego red (y cacheo la respuesta)
self.addEventListener('fetch', event => {
    // Solo gestionamos GET
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                // Si lo tenemos en cache, lo devolvemos inmediatamente
                return cachedResponse;
            }
            // Si no, lo pedimos a red y lo guardamos en cache
            return fetch(event.request).then(networkResponse => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
        })
    );
});
