var staticCacheName = "pwa";
 
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(["/"]);
    })
  );
});
 
self.addEventListener("fetch", function (event) {
  event.respondWith(cachedFetch(event.request));
});

async function cachedFetch(request) {
  console.log('iets van tekst', request.url)
  try {
    const cache = await caches.open(staticCacheName)
    const cacheResponse = await cache.match(request.url)
    try {
      return await fetchAndCache(cache, request)
    } catch (e) {
      if (request.method === 'GET' && cacheResponse && cacheResponse.ok) {
        return cacheResponse
      }
      throw new Error('Failed to fetch')
    }
  } catch (e) {
    return await fetch(request)
  }
}

async function fetchAndCache(cache, request) {
  const fetchResponse = await fetch(request)
  const fetchClone = fetchResponse.clone()
  await cache.put(request.url, fetchClone)
  return fetchResponse
}