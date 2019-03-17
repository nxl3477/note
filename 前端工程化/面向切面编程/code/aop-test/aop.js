function test() {
  alert(2)
}

// 先执行回调， 后执行函数
Function.prototype.before = function(fn) {
  // 这个this 指向test
  var _this = this
  return function() {
    if( fn.apply(this, arguments) == false) {
      return false
    }
    _this.apply(_this, arguments)
  } 
}

// 先执行函数， 后执行回调
Function.prototype.after = function(fn) {
  var _this = this
  return function() {
    // 此时 self 就是 before 返回的function
    var result = _this.apply(_this, arguments)   // 回复其返回值的能力
    // 如果 before 里返回的是false 那就不做处理
    if( result == false ) {
      return false
    } 

    fn.apply(this, arguments)
    return result
  } 
}
// 默认函数被执行2遍 test作为中转

// before回调和before 一起送到after去
// after after 和 test一起送到before去

test.after(() => {
  alert(3)
  return "me test"
}).before(() => {
  alert(1)
  return "me test"
})()
