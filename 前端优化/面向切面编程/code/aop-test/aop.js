function test() {
  alert(2)
}

// 先执行回调， 后执行函数
Function.prototype.before = function(fn) {
  // 这个this 指向test
  var __self = this
  fn()
  return __self.apply(this, arguments)
}

// 先执行函数， 后执行回调
Function.prototype.after = function(fn) {
  var __self = this
  __self.apply(this, arguments)
  return fn()
}
// 默认函数被执行2遍 test作为中转

// before回调和before 一起送到after去
// after after 和 test一起送到before去

test.before(() => {
  alert(1)
  return "me test"
})

test.after(() => {
  alert(2)
  return "me test"
})