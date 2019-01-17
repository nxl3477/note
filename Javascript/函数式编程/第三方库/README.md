
# 函数式第三方编程库
* RxJs[frp]
* cycleJs
* lodashJS、 lazy(惰性求值)
* underscoreJS
* ramdajs


## Rxjs
响应式编程是继承自函数式编程，声明式的，不可变的，没有副作用的是函数式编程的三大护法。其中不可变武功最高深。一直使用面向对象
范式编程的我们，习惯了用变量存储和追踪程序的状态。RxJS从函数式编程范式中借鉴了很多东西，比如链式函数调用，惰性求值等等。
在函数中与函数作用域之外的一切事物有交互的就产生了副作用。比如读写文件，在控制台打印语句，修改页面元素的css等等。在RxJS中，把副作用问题推给了订阅者来解决。


## Cycle.js
Cycle.js 是一个基于 Rxjs 的框架，它是一个彻彻底底的 FRP 理念的框架，和 React 一样支持 virtual DOM、JSX 语法，但现在似乎还没有看到大型的应用经验。

本质的讲，它就是在 Rxjs 的基础上加入了对 virtual DOM、容器和组件的支持


## Underscore.js
Underscore 是一个 JavaScript 工具库，它提供了一整套函数式编程的实用功能，但是没有扩展任何 JavaScript 内置对象。 他解决了这个问题：“如果我面对一个空白的 HTML 页面，并希望立即开始工作，我需要什么？” 他弥补了 jQuery 没有实现的功能，同时又是 Backbone 必不可少的部分。

Underscore 提供了100多个函数，包括常用的：map、filter、invoke— 当然还有更多专业的辅助函数，如：函数绑定、JavaScript 模板功能、创建快速索引、强类型相等测试等等。



## RamdaJs
lodash是一个具有一致接口、模块化、高性能等特性的JavaScript工具库，是underscore.js的fork，其最初目标也是“一致的跨浏览器行为。。。，并改善性能”。

lodash采用延迟计算，意味着我们的链式方法在显式或者隐式的value()调用之前是不会执行的，因此lodash可以进行shortcut（捷径） fusion（融合）这样的优化，通过合并链式大大降低迭代的次数，从而大大提升其执行性能。

就如同jQuery在全部函数前加全局的$一样，lodash使用全局的_来提供对工具的快速访问。

