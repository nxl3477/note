


define(function(require, exports, module) {
	var a = require('5.js')
	console.log('6.js中执行了5.js', a)
	return '6.js return'
})