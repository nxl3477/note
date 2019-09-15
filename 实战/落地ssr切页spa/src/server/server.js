const Koa = require('koa');
const app = new Koa();

// 中间件
require('./middleware')(app)

// Controller
require('./controllers')(app)

app.listen(3000);