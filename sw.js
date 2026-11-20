// 설치형 앱(PWA)용 최소 서비스 워커. 캐시는 하지 않는다 — 항상 최신 화면을 받도록.
// (데이터는 각 프로그램이 구글과 직접 주고받으므로 여기서 손대지 않음)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
