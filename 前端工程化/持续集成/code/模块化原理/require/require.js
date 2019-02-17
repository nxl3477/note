
(function(global) {
	
	var modules = {},
		loadings = [];
		
	var basepath = ''
		
	function getCurrentJs() {
		return document.currentScript.src
	}
	
	function createNode() {
		var node = document.createElement('script')
		node.type = 'text/javascript'
		node.async = true;
		return node
	}
	
	function getDepsIds(arr) {
		return arr.map(item => {
			return basepath + item
		})
	}
	
	function pushDepsIds(obj, arr) {
		var a = arr.map(item => {
			return basepath + item
		})
		obj.concat(a)
	}
		
	var myReq = {}
	
	
	
	myReq.init = function() {
		var currentfile = getCurrentJs();
		basepath =  currentfile.replace(/[^\/]+\.js/i,'');
		
		myReq.loadJs('1.js')
	}
	
	myReq.define = function(deps, callback) {
		var id = getCurrentJs()
		
		
		if(!Array.isArray(deps)) {
			callback = deps
			deps = []
		}
		
		if(!modules.id) {
			modules[id] = {
				id: id,
				deps: getDepsIds(deps),
				callback: callback,
				exports: null,
				status: 1,
				
			}
		}
		
		
	}
	
	myReq.require = function(deps, callback) {
		var id = getCurrentJs()
		
		if(!modules.id) {
			modules[id] = {
				id: id,
				deps: getDepsIds(deps),
				callback: callback,
				exports: null,
				status: 1,
				
			}
			loadings.unshift(id)
		}
		
		myReq.loadDepsJs(id)
		
	}
	
	myReq.loadDepsJs = function(id) {
		modules[id].deps.map(i => {
			if(!modules[i]) {
				myReq.loadJs(i, function(e) {
					modules[e.getAttribute('data-id')].status = 2
					
					loadings.unshift(i)
					myReq.loadDepsJs(i)
					myReq.checkDeps()
				})
			}
		})
	}
	
	myReq.checkDeps = function() {
//		console.log(89, JSON.stringify(loadings));
//		console.log('----------------');
//		console.log('loadings', JSON.stringify(loadings));
		
//		for(var i = loadings.length-1, id; i >= 0 ; i--) {
		for(var i = 0, id; i < loadings.length ; i++) {
			id = loadings[i]
			if(!modules[id]) continue
			
			var obj = modules[id], 
				deps = obj.deps
//			console.log('********************');
			
//			console.log('id', obj.id);
			
			
			var flag = myReq.checkCycle(deps)
			
			if(flag) {
//				console.log(i, loadings[i] ,'全部依赖已经loaded');
				
				loadings.splice(i,1);
				myReq.getExport(obj.id)
				myReq.checkDeps()
			}
			
		}
	}
	
	myReq.checkCycle = function(deps) {
		var flag = true
		
		function cycle(deps) {
//			console.log('this deps', deps);
			deps.forEach(item => {
//				console.log('this inner', item, 'isloaded', !(!modules[item] || modules[item].status == 1))
				if(!modules[item] || modules[item].status == 1) {
					flag = false
				} else if(modules[item].deps.length) {
//					console.log('inner deps', modules[item].deps);
					
					cycle(modules[item].deps)
				}
					
			})
		}
		
		cycle(deps)
		
		return flag
	}
	
	myReq.getExport = function(id) {
//		console.log('==========', id, deps, modules[id].exports);
		var params = [];
		var deps = modules[id].deps
		
//		console.log(id, modules[id].deps);
		
		for(var i = 0; i < deps.length; i++) {
//			console.log('inner', deps[i], modules[deps[i]].exports);
			
			params.push(modules[deps[i]].exports)
//			console.log(8989, params);
			
		}
		
		
		if(!modules[id].exports) {
			modules[id].exports = modules[id].callback.apply(global, params)
		}
		
//		console.log(7878, id ,modules[id].exports);
		
		
		
		
		
//		console.log('++++++++++', id, deps, modules[id].exports);
	}
	
	myReq.loadJs = function(url, callback) {
		var node = createNode()
		node.src = url;
		node.setAttribute('data-id', url)
		node.addEventListener('load', function(evt) {
			var e = evt.target
			setTimeout(() => {
//				console.log(856, e.getAttribute('data-id'));
				callback && callback(e)
			}, 1000)
		}, false)
		
		
		document.body.appendChild(node)
	}
	
	
	myReq.init()
	
	global.require = myReq.require;
	global.define = myReq.define
	
})(window)



















