## 给SCripts文件夹加权限

`scripty`执行shell 脚本需要配置权限

> chmod +x -R script *



## webpack 打包逻辑
使用`glob`插件进行文件搜索， 使用正则匹配静态资源里预设的`js`入口文件， 将匹配到的文件以多入口形式配置webpack， 然后匹配html文件，也是多页面的打包形式, 使用`html-webpack-plugin`, 创建多个实例