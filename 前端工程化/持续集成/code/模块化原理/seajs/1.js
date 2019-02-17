


define(function(require, exports, module) {
	var a = require('2.js')
	console.log('1.js中', a);
	var b = require('3.js')
	console.log('1.js中', b);
	
	console.log('1.js loaded   init');
	
})


// 3 4 2 1