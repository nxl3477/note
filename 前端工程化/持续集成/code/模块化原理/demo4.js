// 只有define，没有require
// 和AMD那个例子一样，还是1依赖2, 2依赖3
//1.js中
define(function() {
    var a = require('2.js')
    console.log(33333)
    var b = require('4.js')
})

//2.js 中
define(function() {
    var b = require('3.js')
})
//3.js 中
define(function() {
    // xxx
})
