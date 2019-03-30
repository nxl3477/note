
function Nxl(option) {
  var data = option.data 
  this.data = data
  // 挂载 getter 和 setter
  observe(data, this)
  var id = option.el
  var dom = new Compile(document.querySelector(id), this)
  console.log(id)
  // directive()
  document.querySelector(id).appendChild(dom)
}