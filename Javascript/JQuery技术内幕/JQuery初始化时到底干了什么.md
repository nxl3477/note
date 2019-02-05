# jQuery技术内幕



## 共享原型链的方法
* 当你没有new 的时候, 通过 jQuery.fn.init 这个方法来连接共享prototype     
* jQuery会在默认new ,并且共享jquery.prototype 的原型链
* 内部没有直接`new Jquery`是可能会引起爆栈
```
// 1.调用 jquery.fn.init 构造函数 
// 2. 共享prototype的方法
// new 第一步返回一个Init的函数 原型链上挂载了一个Init的函数 没有主动执行
// Jquery的  init 没调用, 被搁置了
(function(window, undefiend) {
  var JQuery = function(selector, context) {
    // 使用的人不new  jq内部也会New
    return JQuery.fn.init(selector, context)
  }

  jQuery.fn = jQuery.prototype = {
    init: function(selector, context) {

    }
  }
  jQuery.fn.init.prototype = jQuery.fn
})();

```

## 启发
* 减少调用方法时原型链搜索次数

