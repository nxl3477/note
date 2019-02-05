# 根据环境使用ES6
为什么要根据环境ES6 ， 因为babel 的转换回导致简单的代码转码后边的非常的多， 这就导致了Js文件的变大，  而且 babel-polyfill 的臭名昭著， 十分影响浏览器性能


## 判断是否支持es6运行环境
如果支持ES6
```
<script type="module" ></script>
```

不支持ES6
```
<script type="nomodule" ></script>
```



当然需要先判断下浏览器是否支持Module,  因为在某些浏览器上，`type="module"` 某些浏览器会丧失src的引入能力， 还有的可能会导致一起引入所有js  

所以我们需要提前监测， 然后统一删除所有 `type="module"` , 还有删除不支持的script 标签



## System.js
> 万能模块加载器

ES6的语法， System也是不支持的， 想让System 自动处理， 那就必须使用babel先把ES6转换成System的语法

我们就需要用到 `plugin-transform-modules-systemjs` 这个插件

例子
```
<script type="module" >
import('/js/module.js').then(res => {
  const create = new res.default()
  create.fn()
})
</script>
<script type="nomodule" src="https://cdn.bootcss.com/systemjs/3.0.0/system.js"></script>
<script type="nomodule" >
  // 使用babel 将es6自动转为 System专用
  // @babel/plugin-transform-modules-systemjs

  System.import('/js/module-bundle.js').then(res => {
    const create = new res.default()
    create.fn()
  })
</script>
```