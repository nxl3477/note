const path = require('path')
const log4js = require('log4js');
// node 一般只记录业务逻辑的错误，因为正常服务， 所有都要昨日志， 比如Http 并且独立存储在专门的日志服务器上，而且日志很大， 访问量大了日志也就大了， 很容易把服务器沾满
log4js.configure({
  appenders: { cheese: { type: 'file', filename: path.join(__dirname, '../logs/error.log')}},
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const logger = log4js.getLogger('cheese');

module.exports = (app) => {
  app.use(async (ctx, next) => {
    try {
      await next()
    } catch (error) {
      logger.error(error, "2123")
    }
  })
}
