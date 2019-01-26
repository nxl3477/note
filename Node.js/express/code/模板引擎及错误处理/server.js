const express = require('express');
const app = express();

const swig = require('swig');
const methodOverride = require('method-override')


//设置swig页面不缓存
swig.setDefaults({
    cache: false
})
app.set('view cache', false);

app.set('views','./public/views/');
app.set('view engine','html');
app.engine('html', swig.renderFile);
  
// 增加支持的请求类型
app.use(methodOverride())



app.get('/', function (req, res) {
    res.rener('index',{
        title:'我的个人主页',
        content: 'hello swig666'
    })
})
 



// 打印错误信息
app.use(logErrors)
// 根据请求分开处理错误
app.use(clientErrorHandler)
// 错误页面
app.use(errorHandler)


var server = app.listen(3000, function () {
    console.log('服务已启动, 端口: localhost:3000')
})



function logErrors (err, req, res, next) {
    console.error(err.stack)
    next(err)
}

function clientErrorHandler (err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' })
    } else {
      next(err)
    }
}


function errorHandler (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
}

