/** 
 * serviceWorker几个重要的参数
 * 1.self 代表了serviceWorker作用域
 * 2.caches 代表了serviceWorker的全局参数
*/

// 添加版本戳
var cacheName = "nxl-pwa-step-v1"
var filesToCahe = [
  "/js/index.js",
  "/css/index.css",
  "/images/cat.png",
  "/index.html",
  "/"
]
self.addEventListener('install', (event) => {
  // 首次注册被触发
  // 能够缓存所有的应用
  console.log('安装成功')
  event.waitUntil()
})

function updateStaticCache() {
  return caches.open(cacheName).then((cache) => {
    // 原子操作， 某个文件缓存失败 整个缓存全部作废
    return cache.addAll(filesToCahe)
  }).then(() => self.skipWaiting())
}



self.addEventListener('activate', function() {
  console.log('激活')
})


self.addEventListener('fetch', (event) => {
  // 拦截网络请求
  event.respondWith(new Response("拦截请求"))
})