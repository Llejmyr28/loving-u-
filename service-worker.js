self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("love-app-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/script.js",
        "/manifest.json",
        "/images/download6.png",
        "/images/heart.gif",
        // 👉 add more if needed
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
