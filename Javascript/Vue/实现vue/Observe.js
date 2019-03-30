function defineReactive(vm, key, val) {
  var dep = new Dep()
  Object.defineProperty(vm, key, {
    get() {
      if ( Dep.target ) {
        // JS的浏览器单线程特性， 保证整个全局变量在同一时间内， 只有一个监听器使用
        dep.addSub(Dep.target)
      }
      return val
    },
    set(newVal) {
      if ( newVal == val ) return;
      val = newVal;
      // 作为发布者发出通知
      dep.notify()
    }
  })
}

function observe(obj, vm) {
  Object.keys(obj).forEach(key => {
    defineReactive(vm, key, obj[key])
  })
}