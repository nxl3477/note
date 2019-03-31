let uid = 0;

function Watcher(vm, node, name, type) {
  // 单例， 使用原因未知
  Dep.target = this
  // 姓名
  this.name = name;
  // 呵呵哒 uid
  this.id = ++uid;
  // 与变量相关的Node节点
  this.node = node;
  // vm 实例
  this.vm = vm;
  // 变量类型  nodeValue  || value
  this.type = type;
  // 触发自己原型上的update方法
  this.update()
  // Watcher 实例创建结束就把单例置空
  Dep.target = null
}


Watcher.prototype = {
  update() {
    this.get()
    if(!batcher) {
      // bastcher 单例
      batcher = new Batcher()
    }
    // 加入队列
    batcher.push(this)
  },
  // 给dom赋值
  cb() {
    // 最终实际虚拟dom 处理结果， 只处理一次
    // console.log(`id:${uid}, dom update`)
    // 虚拟dom -> diff( 虚拟dom ) -> 局部更新 -> createElement(vNode) -> render
    this.node[this.type] = this.value
  },
  // 获取新值挂到自己的实例上
  get() {
    // console.log(this.vm)
    this.value = this.vm[this.name]  // 触发getter
  }
}