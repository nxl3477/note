## 短路运算时this区别
> 短路运算返回的是值, 返回后又被调用, 相当于匿名函数, 所以指向window
```
function nxl() {
    alert(this)
}
;(false || nxl)(); // undefind
```

## super指向
* super 指向父类
* 只有在继承时才可被访问
* super无法被打印
* 对 super 赋值会指向实例 也就是当前this

## 函数声明与var 变量
* 函数声明优先级比var 要高
* `var a;`如此声名了a 但未赋值会被忽略


## 微任务与宏任务