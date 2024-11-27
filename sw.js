self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("fox-store")
      .then((cache) =>
        cache.addAll([
          "/ETM/",
          "/ETM/index.html",
          "/ETM/index.js",
          "/ETM/style.css",
          "/ETM/main.js",
          "/ETM/motor.JPG",
          "/ETM/actuator.JPG",
          "/ETM/coupling.JPG",
          "/ETM/housing.JPG",
          "/ETM/geat.JPG",
          "/ETM/Cheveron_process copy-frei.png",
          "/ETM/download.png",
          "/ETM/environment.env",
          "/ETM/gkn-au-stacked.svg",
          "/ETM/TaycanGearRotation11.glb",
          "/ETM/Helvetica Neue STD/Helvetica Neue LT Std/HelveticaNeueLTStd-Lt.otf",
          "/ETM/Helvetica Neue STD/Helvetica Neue LT Std/HelveticaNeueLTStd-Bd.otf",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
