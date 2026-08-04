/* Prelim Study Planner — service worker (offline shell + installable) */
const CACHE = 'prelim-v4';
const SHELL = [
  './', './index.html', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon-180.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      // Core files must all cache; a single missing icon shouldn't fail install.
      .then(c => c.addAll(SHELL).catch(() => Promise.all(SHELL.map(u => c.add(u).catch(() => {})))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Navigations: network-first so redeploys land, fall back to cached shell offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Static assets: stale-while-revalidate.
  e.respondWith(
    caches.match(req).then(cached => {
      const net = fetch(req).then(r => {
        if (r && r.status === 200) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
        return r;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
