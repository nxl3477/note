//express_demo.js 文件
const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World test');
})
 
const server = app.listen(3000, function () {
})