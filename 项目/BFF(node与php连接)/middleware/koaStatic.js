const static = require('koa-static');
const path = require('path')
const { staticDir } = require('../config/config')
module.exports = (app) => {
  app.use(static(staticDir));
}