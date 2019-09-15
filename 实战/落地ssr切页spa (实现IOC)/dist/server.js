"use strict";

const Koa = require('koa');

const app = new Koa();

const {
  asClass,
  asValue,
  Lifetime,
  createContainer
} = require('awilix');

const {
  scopePerRequest,
  loadControllers
} = require('awilix-koa'); // 中间件


require('./middleware')(app); // 创造一个容器


const container = createContainer(); // 把service 注入到容器

container.loadModules([__dirname + "/services/*.js"], {
  formatName: "camelCase",
  resolverOptions: {
    // 每个实例的生命周期， 每次都是新的
    lifetime: Lifetime.SCOPED
  }
}); // 和上面的 lifeTime 对应， 当然你也可以设置为单例

app.use(scopePerRequest(container)); // 自动加载 controllers

app.use(loadControllers(__dirname + "/controllers/*.js"), {
  cwd: __dirname
}); // Controller
// require('./controllers')(app)
// app.use(loadControllers('routes/*.js', { cwd: __dirname }))

app.listen(3000);