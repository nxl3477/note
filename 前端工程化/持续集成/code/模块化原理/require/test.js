


var require, define;

(function() {
	var cfg = {},
		moduleMap = {},
		defQueueArr = [],
		parentMap = {},
		defQueueArr = []
	
	
	function getDataMain() {
		var arr = document.getElementsByTagName('script')
		for(var i=0; i < arr.length; i++) {
			var dataMain = arr[i].getAttribute('data-main')
			if(dataMain) {
				cfg.deps = cfg.deps ? cfg.deps.concat(dataMain) : [dataMain]
			}
		}
	}
	
	function createNode() {
		var n = document.createElement('script')
		n.type = 'text/javascript'
		n.async = true;
		return n
	}
	
	function load(deps) {
			if(!deps.length) return;
//			console.log(67, deps);
			var arr = deps;
			arr.forEach(item => {
				moduleMap[item] = {
					id: item,
					isSuccess: false,
					parent: self
				}
			})
//			console.log(78, JSON.stringify(moduleMap))
			
			for(var i = arr.length-1; i >= 0; i--) {
				var node = createNode()
				node.src = arr[i];
				node.setAttribute('data-id', arr[i]);
				node.addEventListener('load', onScriptLoad, false)
				
				document.getElementsByTagName('head')[0].appendChild(node)
			}
			
		}
	
	
	var req = require = function(deps, callbak) {
		var readyNum = 0;
		var self = this;
		
		var config = {}
		
		if(typeof deps == 'function') {
			callbak = deps
			deps = []
		}
		
		
		
		
		
		function onScriptLoad(evt) {
//			readyNum++
//			console.log(deps, readyNum, evt.target)
//			if(readyNum == deps.length) {
//				console.log(callbak)
//				callbak && callbak()
//			}
			
			
//			moduleMap[evt.target.getAttribute('data-id')].isSuccess = true
			
//			console.log(45,evt.target.getAttribute('data-id'), JSON.stringify(moduleMap));
			
//			deps.forEach(ii => {
//				if(moduleMap[ii].isSuccess) {
//					readyNum++
//					console.log(56, readyNum)
//					if(readyNum == deps.length) {
//						callbak && callbak()
//					}
//				}
//			})
//			console.log(89, evt.target.getAttribute('data-id'), deps)
			console.log(111, moduleMap);
			
			
		}
		
		load.call(this, deps)
		
	}
	
	function define(deps, callback) {
		defQueueArr.push([deps, callback])
	}
	
	
	getDataMain()
	
	req(cfg.deps)
	
	
})()




// 3 4 2 1


























