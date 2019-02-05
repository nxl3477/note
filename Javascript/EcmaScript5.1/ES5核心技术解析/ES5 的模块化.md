
# ES5 的模块化
> 利用函数作用域特性, 实现局部变量, 防止全局污染
```
// 函数式模块化
var module = (function () {
  var n = 5
  function print () {
    console.log(n)
  }

  function add(x) {
    var q = x + n
    console.log(q)
  }

  return {
    des: "这里是模块化",
    add: add
  }

})();

// 静态模块化
var index = {
  data: {
    age: 20
  },
  methods: function() {
    // do somting
  }
}

```