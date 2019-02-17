
(function(global) {
	
	var modules = {},	// 存放所有文件模块的信息，每个js文件模块的信息
		loadings = [];	//	存放所有已经加载了的文件模块的id
		
	var basepath = ''
		
	// 获取当前文件的文件名，作为文件模块的ID	
	// 比如当前是在运行 3.js 呢，那么该函数返回的就是 '3.js'
	function getCurrentJs() {
		return document.currentScript.src
	}
	
	function createNode() {
		var node = document.createElement('script')
		node.type = 'text/javascript'
		node.async = true;
		return node
	}
	
	// 获取该模块依赖的ids
	// 比如  2.js 中   define(['3.js', '4.js'])
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
	// 加载依赖的js
	myReq.loadDepsJs = function(id) {
		modules[id].deps.map(i => {
			if(!modules[i]) {
				myReq.loadJs(i, function(e) {
					modules[e.getAttribute('data-id')].status = 2
					// loadings存放着已经“刚刚”加载完的模块id
					loadings.unshift(i)
					// 依赖加载完后，还要递归的加载依赖的依赖
					myReq.loadDepsJs(i)
					// 每次都要检查一下，看看loadings数组中的所有模块id是否都已经加载完了
					myReq.checkDeps()
				})
			}
		})
	}
	
	// 循环loadings数组，因为数组中的id，都是“刚刚”加载完的模块，那么每个id都要去判断其所依赖的层层嵌套的那些模块是否加载完了
	myReq.checkDeps = function() {
//		console.log(89, JSON.stringify(loadings));
//		console.log('----------------');
//		console.log('loadings', JSON.stringify(loadings));
		
		for(var i = 0, id; i < loadings.length ; i++) {
			id = loadings[i]
			if(!modules[id]) continue
			
			var obj = modules[id], 
				deps = obj.deps
//			console.log('********************');
			
//			console.log('id', obj.id);
			
			// 为什么要执行checkCycle函数呢，checkDeps是循环loadings数组的模块id，而checkCycle是去判断该id模块所依赖的层级的模块是否加载完
			var flag = myReq.checkCycle(deps)
			
			if(flag) {
//				console.log(i, loadings[i] ,'全部依赖已经loaded');
				
				loadings.splice(i,1);
				myReq.getExport(obj.id)
				
				myReq.checkDeps()
			}
			
		}
	}
	// 递归的去判断，一个模块所依赖的层层嵌套的模块是否都已经加载完了
	myReq.checkCycle = function(deps) {
		var flag = true
		
		function cycle(deps) {
//			console.log('this deps', deps);
			deps.forEach(item => {
				if(!modules[item] || modules[item].status == 1) {
					flag = false
				} else if(modules[item].deps.length) {
					cycle(modules[item].deps)
				}
					
			})
		}
		
		cycle(deps)
		
		return flag
	}
	
	// 这个是处理返回值的
	// 2.js 依赖 3.js   那么3.js的return 的值就是 2.js中作为一个参数
	myReq.getExport = function(id) {
//		console.log('==========', id, deps, modules[id].exports);
		var params = [];
		var deps = modules[id].deps
		
		
		for(var i = 0; i < deps.length; i++) {
//			console.log('inner', deps[i], modules[deps[i]].exports);
			
			params.push(modules[deps[i]].exports)
			
		}
		
		
		if(!modules[id].exports) {
			modules[id].exports = modules[id].callback.apply(global, params)
		}
		
		
//		console.log('++++++++++', id, deps, modules[id].exports);
	}
	// 将node节点插入到dom中，并且执行回调
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



















