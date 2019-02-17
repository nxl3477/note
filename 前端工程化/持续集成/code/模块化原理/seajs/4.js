


define(function(require, exports, module) {
	var a = require('6.js')
	console.log('4.js中执行了6.js', a)
	return '4.js return'
})