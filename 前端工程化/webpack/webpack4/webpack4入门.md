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