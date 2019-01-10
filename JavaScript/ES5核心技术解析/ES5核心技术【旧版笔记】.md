# 变量提升
* var 定义的函数在声明前调用默认为underfind
* let 会引起 tdz 暂时性死区

## 闭包
* 拿到你本来不该拿到的东西
* 函数内返回操作内部变量的方法


# 函数提升
> 当遇到如下情况时, 函数会被优先提升, 变量其次, 所以函数的声明会被变量覆盖, 最终结果为20
```
(function () {
  var a = 20
  function a(){}
  
  console.log(a)
})();
```
> 注意, `b=c=a`连续赋值因为c没有带上变量类型'var', 所以会被挂载至 window, 此时c时全局变量,结果为20  
> `b,c = a `此时c被定义为局部变量, 外部无法访问

```
;(function() {
  var a = 20
  var b = c =  a  // c时全局变量
  var b, c = a    // c 此时是局部变量 , 所以外部alert 报错
})();
alert(c)
```

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


# 面向对象编程

### 构造函数
* 构造函数和初始化的类是一个东西
* 构造函数也是普通函数

## 原型链
> 利用原型链避免重复注册 function


## 实操
> 1. 拿到父类原型上的方法
> 2. 不能让构造函数执行2次
> 3. 引用的原型链不能按址引用
> 4. 修正子类的constructor
```
 var Car = function(color) {
  this.color = color
}

Car.prototype.sail = function() {
  console.log(this.color + "颜色的车买了13W")
}

var BWM = function () {
  // 借用继承
  Car.call(this, "red")
}

// 创建原型链f副本
var __pro = Object.create(Car.prototype)
// 修正constructor
__pro.constructor = BWM

BWM.prototype = __pro
var m = new BWM('red')
console.log(m)
```

# 事件线程
* 异步线程
* 同步线程

> 因为js 是单线程执行,  while( true ) 这样的操作会引起线程饥渴, 后面的事件没有任何机会继续执行, 造成浏览器卡死



# 总结
* 立即执行函数
* 闭包就是内部函数可以访问外部函数的变量, 把函数返回出去, 闭包可以保护内部的变量, 闭造成内存泄露则需要 ==null
* 原型链
    * 构造函数里的属性的优先级比原型链的要高
    * 面向对象编程, js没有类的概念, 可以用函数替代
    * prototype 按引用传递, 可以用 Object.create 创建原型链副本
* 对象数组 按引用传递
* 改变this的方法有call apply bind
* 函数提升 变量提升  函数提升级别比变量高
* jq 内部有很多经典的写法 模块化的编程概念 闭包