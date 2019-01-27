const express = require('express');
const path = require('path')
const app = express();


app.use('/views', express.static(path.join(__dirname, 'public')))
app.get('/sse', async (req, res)  => {
    res.writeHead(200, {
        'Connection': 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        "Access-Control-Allow-Origin": '*'
    });
  
    setInterval(() => {
        // 末尾必须带上 \n\n
        res.write('data: Hello \n\n');
    }, 1000);
    
})
 
const server = app.listen(3000, function () {
    console.log('http://localhost:3000')
})