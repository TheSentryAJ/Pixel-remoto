
const CACHE_NAME = 'pixel-remoto-cache-v1';
const urlsToCache = [
  '/',
  '/soluciones',
  '/blog',
  '/sobre-mi',
  '/globals.css', // Next.js namespaced CSS files will be handled by runtime caching if needed
  // Add paths to your main JS bundles if you know them and they are static.
  // Next.js chunk names can change, so be careful here.
  // '/_next/static/chunks/main-....js',
  // '/_next/static/css/....css',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  // Add other important static assets like logo, key images not handled by next/image (if any)
  '/og-image.png',
  '/twitter-card.png',
  '/favicon.ico'
];

// Install event: Cache core assets
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cacheando archivos principales');
        return cache.addAll(urlsToCache.map(url => new Request(url, { cache: 'reload' })));
      })
      .then(() => {
        console.log('Service Worker: Archivos principales cacheados exitosamente.');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Falló el cacheo de archivos principales:', error);
      })
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Borrando cache antigua:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activado y caches antiguas borradas.');
      return self.clients.claim();
    })
  );
});

// Fetch event: Serve assets from cache (Cache First strategy for specified assets)
// For Next.js, many assets are dynamically generated or have hashed names.
// This basic SW is good for a shell and very static assets.
// For more advanced Next.js PWA, consider using packages like next-pwa.
self.addEventListener('fetch', event => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Cache-First for navigation requests (HTML pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(request)
          .then(cachedResponse => {
            if (cachedResponse) {
              console.log('Service Worker: Sirviendo desde cache (navegación):', request.url);
              return cachedResponse;
            }
            // If not in cache, fetch from network and cache
            return fetch(request)
              .then(networkResponse => {
                // Check if we received a valid response
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                  return networkResponse;
                }
                console.log('Service Worker: Cacheando nueva respuesta de red (navegación):', request.url);
                const responseToCache = networkResponse.clone();
                cache.put(request, responseToCache);
                return networkResponse;
              });
          }).catch(error => {
            console.error('Service Worker: Error en fetch (navegación):', error);
            // Fallback to a generic offline page if available
            // return caches.match('/offline.html');
            throw error;
          });
      })
    );
    return;
  }

  // Cache-First for assets specified in urlsToCache or matching a pattern
  const requestUrl = new URL(request.url);
  if (urlsToCache.includes(requestUrl.pathname) || requestUrl.pathname.startsWith('/icons/')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(request)
          .then(cachedResponse => {
            if (cachedResponse) {
              console.log('Service Worker: Sirviendo desde cache (activo estático):', request.url);
              return cachedResponse;
            }
            return fetch(request)
              .then(networkResponse => {
                if (!networkResponse || networkResponse.status !== 200 /*|| networkResponse.type !== 'basic'*/) { // type 'basic' check can be too restrictive for CDNs
                  return networkResponse;
                }
                console.log('Service Worker: Cacheando nueva respuesta de red (activo estático):', request.url);
                const responseToCache = networkResponse.clone();
                cache.put(request, responseToCache);
                return networkResponse;
              });
          });
      })
    );
    return;
  }
  
  // For other requests (like _next/static data, chunks not explicitly cached),
  // use a Network First or Stale-While-Revalidate strategy.
  // Here's a simple Network First:
  event.respondWith(
    fetch(request)
      .then(networkResponse => {
        // Check if we received a valid response
        if (networkResponse && networkResponse.status === 200 && requestUrl.protocol.startsWith('http')) {
           // Don't cache API calls or other dynamic content this way unless intended
          if (requestUrl.pathname.startsWith('/_next/static/') && !requestUrl.pathname.includes('/development/')) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseToCache);
            });
          }
        }
        return networkResponse;
      })
      .catch(() => {
        // If network fails, try to serve from cache if it exists
        return caches.match(request);
      })
  );
});
