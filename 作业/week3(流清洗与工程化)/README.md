## 给SCripts文件夹加权限

`scripty`执行shell 脚本需要配置权限

> chmod +x -R script *



## webpack 打包逻辑
使用`glob`插件进行文件搜索， 使用正则匹配静态资源里预设的`js`入口文件， 将匹配到的文件以多入口形式配置webpack， 然后匹配html文件，也是多页面的打包形式, 使用`html-webpack-plugin`, 创建多个实例






## 整套流程思路
以搜索所有`**.entry.js`为起始 ， 通过 `文件夹-文件名`的命名规范找到对应目录下的html文件，放入`html-webpack-plugin`,  然后通过 webpack 的打包， 把entry文件中所引用的`components` 中的静态资源文件打包进js ， 然后利用`copy-webpack-plugin` 直接拷贝组件`web/components`文件夹中的 `.html`文件， 其对应的`css`、`js`文件通过上述的`entry`文件引用打包过去
以及 公共模板`web/views/common`文件夹至目标目录 