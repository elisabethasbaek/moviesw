const CACHE_NAME = "moviez_cache_v1";
var urlsToCache = [
    "/"
];

self.addEventListener("install", function(event){
    event.waitUntil(
        cache.open(CACHE_NAME)
            .then(function(cache){
                console.log("Cache opened");
                return cache.addAll([urlsToCache]);
            })
    );
});

self.addEventListener("fetch", function(event){
    event.respondWith(
        caches.match(event.request)
            .then(function(response){
                if(response){
                    return response;
                };

                return fetch(event.request)
                    .then(function(response){
                        if(!response || response.status !== 200 || response.type !== 'basic'){
                            return response;
                        }
          
                        var responseToCache = response.clone();
            
                        caches.open(CACHE_NAME)
                            .then(function(cache){
                                cache.put(event.request, responseToCache);
                            })
            
                        return response;
                    });
            })
    );
});
//lige så snart der sker et fetch kald, så griber den her fetch-kaldet og tjekker cachen for requestet. hvis der allerede er et match i vores cache på den request, så er det det der bliver sendt. hvis ikke der er et match, så returnerer den fetchkaldet med vores request.