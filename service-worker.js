self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("love-app-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/script.js",
        "/manifest.json",
        "/love-song.mp3",
        "/images/heart.gif"
        // Add more image paths here if needed
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
