var express = require('express');
var app = express();
const request = require('request') 
const cheerio = require('cheerio')

app.get('/', function (req, res) {
    request('http://www.imooc.com', (err, response, body) => {
        if(!err && response.statusCode == 200 ) {
            $ = cheerio.load(body)
            
            res.json({
                'classnum': $('.bgfff').html()
            })
        }
    })
})
 
const server = app.listen(3000, () => { 
    console.log('server in http://localhost:3000')
})