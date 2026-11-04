/* 오프라인용 서비스 워커. 앱 파일은 미리 저장하고, 글꼴은 처음 받을 때 저장합니다. */
var VERSION = 'italy2026-v6';
var FONT_CACHE = 'italy2026-fonts';
var SHELL = [
  './', './index.html', './styles.css?v=6', './app.js?v=6', './data.js?v=6', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION && k !== FONT_CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  // 페이지: 인터넷이 되면 새 버전, 안 되면 저장본
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(function (res) {
      var copy = res.clone();
      caches.open(VERSION).then(function (c) { c.put('./index.html', copy); });
      return res;
    }).catch(function () { return caches.match('./index.html'); }));
    return;
  }

  // 공유 일정 파일: 인터넷이 되면 최신, 안 되면 저장본
  if (url.origin === self.location.origin && /\/plan\.json$/.test(url.pathname)) {
    e.respondWith(fetch(req).then(function (res) {
      if (res.ok) { var copy = res.clone(); caches.open(VERSION).then(function (c) { c.put('./plan.json', copy); }); }
      return res;
    }).catch(function () { return caches.match('./plan.json'); }));
    return;
  }

  // 글꼴(jsdelivr): 저장본 우선
  if (url.hostname === 'cdn.jsdelivr.net') {
    e.respondWith(caches.open(FONT_CACHE).then(function (c) {
      return c.match(req).then(function (hit) {
        return hit || fetch(req).then(function (res) {
          if (res.ok || res.type === 'opaque') c.put(req, res.clone());
          return res;
        });
      });
    }));
    return;
  }

  // 앱 파일: 저장본을 바로 쓰고 뒤에서 갱신
  if (url.origin === self.location.origin) {
    e.respondWith(caches.open(VERSION).then(function (c) {
      return c.match(req).then(function (hit) {
        var net = fetch(req).then(function (res) { if (res.ok) c.put(req, res.clone()); return res; }).catch(function () { return hit; });
        return hit || net;
      });
    }));
  }
});
