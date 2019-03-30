function Dep() {
  // 存放watcher
  this.subs = []
}

Dep.prototype = {
  // 添加watcher, 也就是添加订阅
  addSub(sub) {
    this.subs.push(sub)
  },
  // 通知所有watcher
  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}