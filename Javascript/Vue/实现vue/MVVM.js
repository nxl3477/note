
function Vue(option) {
  var data = option.data 
  this.data = data
  // 挂载 getter 和 setter
  observe(data, this)
  var id = option.el
  // 编译 模板
  var dom = new Compile(document.querySelector(id), this)
  // 把编译好的模板挂载到 #app 上
  document.querySelector(id).appendChild(dom)
}




