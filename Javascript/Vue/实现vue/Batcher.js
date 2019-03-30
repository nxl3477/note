// 批处理构造函数
function Batcher() {
  //  重置  has  queue waiting
  this.reset()
}


Batcher.prototype.reset = function () {
  this.has = {}
  this.queue = []
  this.waiting = false
} 

// 将watcher 添加到队列中
Batcher.prototype.push = function (job) {
  let id = job.id
  // 先根据 对象的key 看看是否已经有了这个watcher
  if (!this.has[id]) {
    console.log(batcher)
    this.queue.push(job)
    // 将watcher 的key的设为true
    this.has[id] = true

    // 延迟执行
    if (!this.waiting ) {
      this.waiting = true
      if ( "Promise" in window ) {
        Promise.resolve().then(() => {
          this.flush()
        })
      } else {
        setTimeout(() => {
          this.flush()
        }, 0)
      }
    }
  }
}


// 执行并情况事件队列
Batcher.prototype.flush = function() {
  this.queue.forEach(job => {
    job.cb()
  })
  this.reset()
}



