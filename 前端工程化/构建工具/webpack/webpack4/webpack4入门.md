# webpack4入门


## 初始化
现在的webpack 需要安装两个包才能启动， 一个是webpack本身， 一个是webpack-cli

* npm install webpack --save-dev
* npm install webpack-cli --save-dev

现在webpack4 是默认入口为 src 目录下的index.js 文件


## Babel
在没有`webpack.config.js` 文件的情况下， 想要调用 .babelrc 文件进行编译，就得在启动那下功夫。

比如: 
```
"dev": "webpack --mode production --module-bind js=babel-loader"
```

### modules
因为Babel的预案（preset）默认会将任何模块类型都转译成CommonJS类型。
如果`modules ： false` 
就不会对es6的语法（诸如:import）进行转换

tree shaking 需要使用ES6的模块化语法， 所以`modules:false`的作用就体现在这里。

## Scope Hoisting
`Scope Hoisting`  是webpack3 的最重要特性， 打包中的每个模块都被包装在单独的函数闭包中。这些包装器函数使JavaScript在浏览器中执行的速度变慢。相比之下，闭包编译器 和 RollupJS `Hoisting` 或 将所有模块的作用域连接到一个闭包中，从而使代码在浏览器中有更快的执行时间。


## code spliting
> 代码切割， 也就是异步加载js

有效解决单文件过大的问题， 提升首屏渲染速度


以异步导入的方式
> import('xxx.js').then(res => )

同步导入方式
> import('xxx.js')




## Tree Shaking
当从某文件模块中导出（某一个或几个变量、函数、对象等），然而这个文件模块还有许多其它（我们这次并不需要）的导出，webpack会不管三七二十一简单粗暴的将整个模块包含进来，使得我们最终打包的文件里有了许多不需要的垃圾。这就到了tree shaking出手的地方了，因为它能帮助我们干掉那些用不到的代码，大大减少打包的尺寸。

### Tree shaking 的必要条件
> https://ericteen.github.io/2018/03/12/optimization/

第一个要求，必须使用ES6模块，不能使用其它类型的模块如CommonJS之流。如果使用Babel的话，这里有一个小问题，因为Babel的预案（preset）默认会将任何模块类型都转译成CommonJS类型。修正这个问题也很简单，在.babelrc文件或在webpack.config.js文件中设置modules： false就好了。