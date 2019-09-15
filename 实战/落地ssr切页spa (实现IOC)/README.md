## 给SCripts文件夹加权限

`scripty`执行shell 脚本需要配置权限

> chmod +x -R script *



## webpack 打包逻辑
使用`glob`插件进行文件搜索， 使用正则匹配静态资源里预设的`js`入口文件， 将匹配到的文件以多入口形式配置webpack， 然后匹配html文件，也是多页面的打包形式, 使用`html-webpack-plugin`, 创建多个实例


## 整套流程思路
以搜索所有`**.entry.js`为起始 ， 通过 `文件夹-文件名`的命名规范找到对应目录下的html文件，放入`html-webpack-plugin`,  然后通过 webpack 的打包， 把entry文件中所引用的`components` 中的静态资源文件打包进js ， 然后利用`copy-webpack-plugin` 直接拷贝组件`web/components`文件夹中的 `.html`文件， 其对应的`css`、`js`文件通过上述的`entry`文件引用打包过去
以及 公共模板`web/views/common`文件夹至目标目录 



## 前端假路由的技术实现
* pushstate

## 落地ssr切页spa实现原理
* pjax
* quicklink

在页面加载成功后， 利用`pjax` 代理页面上的`a`标签， 代理后用户点击`a`标签，会在请求上添加 'x-pajx' 的请求头， 让后端识别到， 所以我们可以根据此来只返回该页面关键的变化的相关资源

### 如何知道所需的资源

1. 提前给目标 `html` 添加上 `id` 或 `class` ， 然后后端读取`html`后利用 `cheerio`来识别相关dom,   js 资源也是同理， 在`webpack`打包时加上特定的`class`




## 如何提前加载下一个页面的资源
quicklink

### 预加载原理
利用 `Intersection Observer`来监听元素是否存在于显示区域， 代替了原本的懒加载计算

利用浏览器原生支持的预加载api

1. Resource Hint
1.1 DNS Prefetch
1.2 Preconnect
1.3 Prefetch
1.4 Prerender

