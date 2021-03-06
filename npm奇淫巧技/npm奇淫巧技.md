# NPM

## 只安装生产环境依赖
> npm install --production 

## 设置Node 执行环境

利用 cross-env 设置环境变量参数
>  cross-nev NODE_ENV=XXX  npm run start


node获取环境变量
> process.env.NODE_ENV



## `-dev`的含义
> 开发环境依赖

我们在安装npm 包的时候时常会用到类似 `npm install xxx --save-dev`
之前一直没明白`-dev`是啥意思, 现在了解了, 原来是开发环境所依赖的包才加上`-dev`, 
现在甚至可以省略`--save`, 直接`-dev`


## 并行与串行
npm 执行命令分两种模式, 一个是并行, 一个是穿行 

* `&`: 并行就是同时运行, 和其他命令没有关系, 各自执行各自的,同时一起开始任务 
* `&&`:  串行就是排队运行, 前一个完成并且不出错才能继续下一个


## 声明周期
> prod 表示在某个命令之前
* `preprod`: 在执行`prod`命令之前回自动执行该命令

> 大概是这样的
```
"preprod": "echo 1",
"prod": "echo 2",
```

## 集成化运行命令
> npm-run-all 可以批量运行npm命令， 并且简写

比如原本`集成化测试`需要手写这么多命令
> npm run e2e && npm run ui && npm run unit
现在只要
> npm-run-all e2e ui unit

该命令默认为穿行， 如果需要调整为并发需要加上`--parallel`
> npm-run-all  --parallel e2e ui unit


## 查看Npm自带的命令
> 直接敲 npm


## 查看环境变量( 配置及包名等等 )
> npm run env

或者打印某个变量名

```
// 输出包名
"script": {
  "test": "echo $npm_package_name"
}

```


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