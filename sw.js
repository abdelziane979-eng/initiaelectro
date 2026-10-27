/* =========================================================
   SERVICE WORKER - InitiaElectro / EspaceElectronic
   Permet le fonctionnement hors ligne et l'installation PWA
   ========================================================= */
var CACHE_NAME = 'initiaelectro-v18';
var FILES_TO_CACHE = [
  './',
  './index.html',
  './bac_a_sable.html',
  './bibliotheque.html',
  './projets.html',
  './fiche-test.html',
  './composants.js',
  './manifest.json',
  './manifest-bac.json',
  './labo-technique/index.html',
  './labo-technique/calculateur.html',
  './labo-technique/schemas.html',
  './labo-technique/oscilloscope.html',
  './labo-technique/pannes.html',
  './labo-technique/datasheets.html',
  './labo-technique/manuel.html',
  './labo-technique/style-labo.css'
];

/* Installation : mise en cache des fichiers */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('📦 Cache ouvert : ' + CACHE_NAME);
      return cache.addAll(FILES_TO_CACHE);
    }).catch(function(err) {
      console.log('⚠️ Erreur cache:', err);
    })
  );
  self.skipWaiting();
});

/* Activation : nettoyage des anciens caches */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(name) {
          if (name !== CACHE_NAME) {
            console.log('🗑️ Suppression ancien cache:', name);
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim();
});

/* Fetch : servir depuis le cache, sinon réseau */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request).then(function(networkResponse) {
        if (networkResponse && networkResponse.status === 200) {
          var responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(function() {
        return caches.match('./index.html');
      });
    })
  );
});
