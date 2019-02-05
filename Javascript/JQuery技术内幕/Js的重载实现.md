
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


