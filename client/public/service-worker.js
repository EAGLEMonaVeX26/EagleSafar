const CACHE_NAME = "eaglesafar-public-v1";
const APP_SHELL = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/brand-mark.svg",
  "/icons/icon-180.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];
const PRIVATE_PREFIXES = ["/api/", "/manus-oauth/", "/chairman", "/staff", "/partner-admin"];
const SAFE_ASSET_PREFIXES = ["/assets/", "/icons/"];
const SAFE_ASSETS = new Set(["/brand-mark.svg", "/manifest.webmanifest"]);

function isPrivatePath(pathname) {
  return PRIVATE_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(prefix));
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch(() => undefined)
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith("eaglesafar-") && key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || request.headers.has("authorization")) return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || isPrivatePath(url.pathname)) return;

  if (request.mode === "navigate") {
    // Only the public landing page may be served from the offline shell.
    if (url.pathname !== "/") return;
    event.respondWith(
      fetch(request).then((response) => {
        if (response.ok && !response.headers.has("set-cookie")) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("/", copy));
        }
        return response;
      }).catch(async () => (await caches.match("/")) || (await caches.match("/index.html")) || Response.error())
    );
    return;
  }

  const isSafeAsset = SAFE_ASSETS.has(url.pathname) || SAFE_ASSET_PREFIXES.some((prefix) => url.pathname.startsWith(prefix));
  if (!isSafeAsset) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        const cacheControl = response.headers.get("cache-control") || "";
        const isPrivateResponse = /(?:private|no-store|no-cache)/i.test(cacheControl) || response.headers.get("vary") === "*" || response.headers.has("set-cookie");
        if (response.ok && !isPrivateResponse) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
