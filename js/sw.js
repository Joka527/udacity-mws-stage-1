let cacheID = 'mws-restaurant-001';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheID).then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/css/styles.css',
                '/data/restaurants.json',
                '/js/',
                '/js/dbHelper.js',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/js/register.js'
            ])
            .catch(err => {
                console.log('Cache open failed: ' + err);
            });
        })
    );
});

self.addEventListener('fetch', function(event) {
    let cacheRequest = event.request;
    if (event.request.url.indexOf('restaurant.html') > -1 ){
        cacheRequest = new Request('restaurant.html');
    }
    event.respondWith(
      caches.match(cacheRequest).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });