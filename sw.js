/* Mixology Handbook — service worker (çevrimdışı çalışma)
   İçeriği güncellediğinde VERSION değerini artır (ör. v2), böylece telefonlar yeni dosyaları alır. */
const VERSION = "v1";
const CACHE = "mmh-" + VERSION;
const FONT_CACHE = "mmh-fonts";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./js/app.js",
  "./js/calcs.js",
  "./data/00-temel.js",
  "./data/01-infuzyon.js",
  "./data/02-surup.js",
  "./data/03-cordial.js",
  "./data/04-bitter.js",
  "./data/05-fatwash.js",
  "./data/06-berrak.js",
  "./data/07-molekuler.js",
  "./data/08-ileri.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-64.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k !== FONT_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function timeout(ms) { return new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms)); }

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Google Fonts: önce önbellek
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(
      caches.open(FONT_CACHE).then((c) => c.match(req).then((hit) => hit || fetch(req).then((res) => { c.put(req, res.clone()); return res; })))
    );
    return;
  }
  if (url.origin !== self.location.origin) return;

  // Sayfa açılışı: önce ağ (3 sn), yoksa önbellek
  if (req.mode === "navigate") {
    e.respondWith(
      Promise.race([fetch(req), timeout(3000)])
        .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put("./index.html", copy)); return res; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Diğer dosyalar: önbellekten hemen ver, arka planda güncelle
  e.respondWith(
    caches.open(CACHE).then((c) =>
      c.match(req).then((hit) => {
        const net = fetch(req).then((res) => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => hit);
        return hit || net;
      })
    )
  );
});
