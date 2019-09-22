/** 
 * serviceWorker几个重要的参数
 * 1.self 代表了serviceWorker作用域
 * 2.caches 代表了serviceWorker的全局参数
*/

// 添加版本戳
// 所有sw 的值全部以cacheName 为版本戳依据， 当此时的key 和老的key 相同则从老的记录取， 如不一致，则重新安装
var cacheName = "nxl-pwa-step-v1"
var filesToCahe = [
  "/css/index.css",
  "/images/cat.png",
  "/index.html",
  "/"
]
// 生命周期， 安装阶段， 首次注册才会触发
self.addEventListener('install', (event) => {
  // 首次注册被触发
  // 能够缓存所有的应用
  console.log('安装成功')

  // 等待缓存工作完成 
  event.waitUntil(updateStaticCache)
})


// 具体的缓存操作
function updateStaticCache() {
  // 使用 serveice workder 全局参数caches
  return caches.open(cacheName).then((cache) => {
    // 原子事务操作， 一旦某个文件缓存失败 整个缓存全部作废
    return cache.addAll(filesToCahe)
  })
  // 强制 处于wait 状态的脚本 进入激活状态， 当有多个 service workder 注册任务的时候 会变成事务等待， 一旦一个失败之后， 就会全部放弃， 这句话的意思就是放弃等待其他的service workder任务自己执行下去
  .then(() => self.skipWaiting())
}


// 生命周期， 激活阶段
self.addEventListener('activate', function(event) {
  console.log('激活成功')

  // caches 对象中不一定只有一个key , 会有多个key 的情况， 如果有多个就需要遍历， 一般多页面应用就会有多个
  event.waitUntil(caches.keys().then(function(keyList) {
    // 遍历当前版本戳的缓存
    return Promise.all(keyList.map(function(key) {
      // 如果旧的key 不等于 当前的 key 那就把旧的删了， （ 这里只判断了一种key 的情况 ）
      if( key !== cacheName ) {
        return caches.delete(key)
      }
    }))
  }))
})

// 资源请求阶段 截取数据请求
// 所有网站请求都会经过它
self.addEventListener('fetch', (event) => {
  // 拦截网络请求
  console.log('拦截请求触发')
  // 伪造响应
  // event.respondWith(new Response("拦截请求"))
  console.log("截取当前网络请求",  event.request, fetch)
  event.respondWith(
    // 去匹配 每次的请求
    caches.match(event.request).then(function (response) {
      // 如果匹配到了则返回匹配结果, 如果没有匹配到，就使用fetch 请求放行
      if( response ) {
        console.log('response 🍊')
        return response
      }else {
        console.log('fetch 🍎')
        return fetch(event.request.url)
      }
    })
  )
})