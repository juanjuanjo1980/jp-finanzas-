// Service Worker minimo - sin cache para evitar errores
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
// No interceptamos fetch - dejamos que el navegador maneje todo
