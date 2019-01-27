const express = require('express');
const app = express();
const sleep = (delay) => new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, delay)
})  



app.get('/', async (req, res)  => {
    res.writeHead(200, {
        "Content-Type": 'application/json',
        // 设置无缓存
        "Cache-Control":"no-cache",
    });
    // res.setHeader('Content-type', 'appliacetion/json;charset=utf-8')
    // res.setHeader('Cache-Control', 'max-age=0')
    let flag = 0
    while(flag < 9) {
        await sleep(1000)
        flag++
        res.write('hahha \n\n')
        res.flush();
        // res.redirect('/')
    }
    res.end()
    // res.send('Hello World');
})
 
const server = app.listen(3000, function () {
    console.log('http://localhost:3000')
})