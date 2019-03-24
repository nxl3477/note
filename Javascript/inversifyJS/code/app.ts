// 这个库一定要放顶上， 不然报错恶心死你
import "reflect-metadata";
// inversify 只提供了非常简陋的express版本， 所以需要找封装版
import { InversifyKoaServer } from 'inversify-koa-utils'
// 引入需要导入的模块 , 起一个配置文件的作用
import "./ioc/loader"
import errorHandle from './util/errorHandler'
import * as log4js from 'log4js';
import { join } from 'path'
import * as render from 'koa-swig';
import co from 'co';
import config from './config'
import * as staticKoa from 'koa-static' 

// 创建容器
import {Container, buildProviderModule} from "./ioc/ioc"


// ----------- 配置logger --------------

log4js.configure({
  appenders: { cheese: { type: 'file', filename: join(__dirname, '../logs/error.log')}},
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const logger = log4js.getLogger('cheese');


// ----------- 配置logger --------------





// 获取容器的实例
const container = new Container()

// 需要有人来buid产出 provide 提供出来的模块
container.load(buildProviderModule())

// 创建服务， 传入容器
let server = new InversifyKoaServer(container)

// 这里配置中间件
server.setConfig(app => {
  // 静态资源
  app.context.render = co.wrap(render({
    //设置简单的配置
    root: config.viewDir,//视口路径
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    // 自定义标签
    varControls: ["[[","]]"],
    writeBody: false
  }));
  app.use(staticKoa(config.staticDir));
}).setErrorConfig((app) => {
  // 容错
  errorHandle.error(app, logger)
})

// 产出app
let app = server.build()

// 监听服务
app.listen(3000, () => {
  console.log("http://localhost:3000")
})
