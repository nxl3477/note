const render = require('koa-swig');
const co = require('co');
const { viewDir } = require('../config/config')


module.exports = (app) => {
  app.context.render = co.wrap(render({
    //设置简单的配置
    root: viewDir,//视口路径
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    // 自定义标签
    varControls: ["[[","]]"],
    writeBody: false
  }));
}