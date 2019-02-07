# egg
egg是一款阿里开发的，基于KOA的mvc框架，在koa 框架上加强了mvc的概念
> egg官网: https://eggjs.org/zh-cn/intro/quickstart.html

## 快速初始化
```
$ npm i egg-init -g
$ egg-init egg-example --type=simple
$ cd egg-example
$ npm i
```

启动项目:
```
$ npm run dev
$ open localhost:7001
```


## 目录文件

* .travis.yml : 用于将来上线持续部署



## 模板渲染
>  npm i egg-view-nunjucks --save


开启插件
```
// config/plugin.js
  exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
  };


// config/config.default.js
// 添加 view 配置
cinfig.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

```