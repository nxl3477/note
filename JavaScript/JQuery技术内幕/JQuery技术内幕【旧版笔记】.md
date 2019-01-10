# jQuery技术内幕
## 匿名函数自传参
* 加速变量的查找, 不用一直向上查找window
* 保护变量箱功能
* 可以对某些关键字进行修改, 如这条代码
```
(function(window, undefined){
    undefined = 42
    alert(undefined)
){})(window);
```


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

## 链式调用
* jquery 在每个方法的最后都会 return 一个jquery对象


## 实现重载
* 利用old变量锁住所有回调, 像是递归
* 根据f.length 来判断是否是相同事件
```
//  ----------------- 重载-----------------------
function addMethod(ovject, name, f) {
  // 通过old 锁住引用, 所有传入过的回调都在闭包
  var old = obj[name]
  obj[name] = function() {
    if(f.length === arguments.length) {
      // 这个this是obj
      return f.apply(this, arguments)
    }else {
      return old.apply(this, arguments)
    }
  }
}

var people = {
  name: ['张三', "李四", "王二麻"]
}

addMethod(people, 'find', function() {
  return this.name
})
```



## 启发
* 减少调用方法时原型链搜索次数

