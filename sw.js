// sw.js — Service Worker نظيف
// يمكنك إضافة منطق التخزين المؤقت هنا لاحقاً إذا أردت

const CACHE_NAME = 'learn-python-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/i18n.js',
    '/gogolanapropng.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
