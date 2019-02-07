# hapi框架
Hapi是一款为接口而生的框架， 生来就是为纯的json而产生的

这个框架的优势在于自己储备好了容错机制， 404/500等等

它还能够自动根据数据修改请求抱头， 非常的棒

## 文档手册
> hapi 官网 https://hapijs.com/


## 起步
> npm install hapi --save

```
'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

// Add the route
server.route({
    method:'GET',
    path:'/hello',
    handler:function(request,h) {

        return'hello world';
    }
});

// Start the server
const start =  async function() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
```





## 处理静态文件
使用静态文件处理库
> npm install inert --save


```
await server.register(require('inert'));
```

### 静态文件访问出现Forbidden
有可能是你的Linux权限没有给到还有可能就是你没有使用绝对路径

只要把你的相对路径改为绝对路径就行
```
return h.file(path.join(__dirname, '../public/hello.html'))
```

## 日志处理
用来查看运行期间所有的日志

安装
> npm install hapi-pino --save


注册插件
```
await server.register({

  plugin: require('hapi-pino'),

  options: {
      prettyPrint: true,
      logEvents: ['response', 'onPostStart']
  }
});
```

