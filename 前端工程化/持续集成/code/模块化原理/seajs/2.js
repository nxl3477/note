


define(function(require, exports, module) {
	var a = require('4.js')
	console.log('2.js中执行了4.js', a)
	return '2.js return'
})