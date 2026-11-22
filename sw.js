const CACHE_NAME = 'cherry-pos-v1';
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Yangi versiyani darhol o'rnatish
});
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim()); // Boshqaruvni darhol olish
});
self.addEventListener('fetch', (event) => {
  // Tarmoqdan yuklashga harakat qilamiz, agar xato bo'lsa keshdan olamiz
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});