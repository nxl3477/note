# NPM

## 自定义的命令
为何能在shell中执行`karma`之类的命令
因为在`node_modules`中有专门配置`.bin`文件

#### 如何自定义 bin 命令
bin字段是一个键值对,键名是生成的.cmd文件的名字,值是执行这个命名所要执行的脚本.
在`package.json`中添加类似代码
```
"bin":{
  "lcopy":"./index.js"
}
```
然后执行一次npm命令
> npm link


## 并行与并发