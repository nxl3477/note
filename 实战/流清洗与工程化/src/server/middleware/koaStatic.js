const staticKoa = require('koa-static');
const { staticDir } = require('../config/config')
const a = '123123'
module.exports = (app) => {
  app.use(staticKoa(staticDir));
}