
(function(global) {
	var modules = {},
		loadings = []
		
	var basepath = ''
	var baseId;
	
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
	
	var s = {}
	
	s.use = function(url) {
		var currentfile = getCurrentJs();
		basepath =  currentfile.replace(/[^\/]+\.js/i,'');
		
		var id = basepath + url;
		baseId = id
		
		s.loadJs(id, function(e) {
			loadings.unshift(e.getAttribute('data-id'))

//			console.log(89, modules, loadings);
		})
	}
	
	s.parseDependencies = parseDependencies
	
	s.define = function(callback) {
		var id = getCurrentJs()
		var depsInit = s.parseDependencies(callback.toString())
		var a = depsInit.map(item => basepath + item)
		
		
		if(!modules[id]) {
			modules[id] = {
				id: id,
				status: 1,
				callback: callback,
				deps: a,
//				remains: s.parseDependencies(callback.toString()).length,
				exports: null
			}
			
		}
		
		s.loadDepsJs(id)
		
		
//		console.log(5656, JSON.stringify(modules), loadings);
		
		
	}
	
	s.require = function(id) {
		id = basepath + id
		
		return modules[id].callback.call(global, s.require)
	}
	
	s.loadDepsJs = function(id) {
//		console.log(1111, id, modules[id]);
		
		modules[id].deps.forEach(item => {
			if(!modules[item]) {
				s.loadJs(item, function(e) {
					modules[e.getAttribute('data-id')].status = 2
					loadings.unshift(e.getAttribute('data-id'))
//					s.loadDepsJs(item)
//					console.log('-----loadings------', JSON.stringify(loadings));
					
					s.checkDeps()
				})
			}
		})
	}
	
	
	s.loadJs = function(url, callback) {
		var node = createNode()
		node.src = url;
		node.setAttribute('data-id', url)
		
		node.addEventListener('load', function(evt) {
			var e = evt.target
//			setTimeout(function() {
				callback && callback(e)
//			}, 1000)
		}, false)
		
		document.head.appendChild(node)
		
	}
	
	s.checkDeps = function() {
		for(var i = loadings.length - 1, id; i >= 0; i--) {
			id = loadings[i]
			if(!modules[id]) continue
			
			var flag = s.checkCycle(id)
//			console.log('id: ', id, flag);
			if(flag) {
				loadings.splice(i, 1)
				if(id == baseId) {
					s.startRun()
				}
				s.checkDeps()
			}
		}
		
	}
	
	s.checkCycle = function(id) {
		var flag = true;
		
		function cycle(id) {
			modules[id].deps.forEach(function(iid) {
				
				if(!modules[iid] || modules[iid].status == 1) {
					flag = false
				} else if(modules[iid].deps.length){
					cycle(iid)
				}
			})
		}
		
		cycle(id)
		
		return flag
	}
	
	s.startRun = function() {
		var baseObj = modules[baseId];
//		console.log(66666666666, baseObj);
		baseObj.callback.call(global, s.require)
		
	}
	
	global.mysea = s
	global.define = s.define
	global.require = s.require
	
	
})(window)




mysea.use('1.js')





















