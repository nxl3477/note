var modules = {}, // 存放所有文件模块的信息，每个js文件模块的信息
    loadings = []; //	存放所有已经加载了的文件模块的id，一旦该id的所有依赖都加载完后， 该id将会在数组中移除

// 上面说了，每个文件模块都要有个id，这个函数是返回当前运行的js文件的文件名，拿文件名作为文件对象的id
// 比如，当前加载 3.js 后运行 3.js ，那么该函数返回的就是 '3.js'
function getCurrentJs() {
    return document.currentScript.src
}
// 创建节点
function createNode() {
    var node = document.createElement('script')
    node.type = 'text/javascript'
    node.async = true;
    return node
}
// 开始运行
function init() {
    // 加载 1.js
    loadJs('1.js')
}
// 加载文件(插入dom中)，如果传了回调函数，则在onload后执行回调函数
function loadJs(url, callback) {
    var node = createNode()
    node.src = url;
    node.setAttribute('data-id', url)
    node.addEventListener('load', function (evt) {
        var e = evt.target
        setTimeout(() => { // 这里延迟一秒，只是让在浏览器上直观的看到每1秒加载出一个文件
            callback && callback(e)
        }, 1000)
    }, false)

    document.body.appendChild(node)
}

// 此时，loadJs(1.js)后，并没有传回调函数，所以1.js加载成功后只是自动运行1.js代码
// 而1.js代码中，是require( ['2.js', 'xxx.js'], functionA（B, C）{} )，则执行的是require函数, 在下面是require的定义
window.require = function (deps, callback) {
    // deps 就是对应的 ['2.js', 'xxx.js']
    // callback 就是对应的 functionA
    // 在这里，是不会运行callback的(即模块的运行！)，得等到所有依赖都加载完的啊
    // 所以得有个地方，把一个文件的所有信息都先存起来，尤其是deps和callback
    var id = getCurrentJs(); // 当前运行的是1.js，所以id就是'1.js'
    if (!modules.id) {
        modules[id] = { // 该模块对象信息
            id: id,
            deps: deps,
            callback: callback,
            exports: null, // 该模块的返回值return ，就是functionA(B, C)运行后的返回值，仔细想想？在后面的getExports中详细讲
            status: 1,
        }
        loadings.unshift(id); // 加入这个id，之后会循环loadings数组，递归判断id所有依赖
    }
    loadDepsJs(id); // 加载这个文件的所有依赖,即去加载[2.js]
}

function loadDepsJs(id) {
    var module = modules[id]; // 获取到这个文件模块对象
    // deps是['2.js']
    module.deps.map(item => { // item 其实是依赖的Id，即 '2.js'
        if (!modules[i]) { // 如果这个文件没被加载过（注：加载过的肯定在modules中有）1）
            loadJs(item, function () { // 加载 2.js，并且传了个回调，准备要递归了
                // 2.js加载完后，执行了这个回调函数
                loadings.unshift(item); // 此时里面有两个了, 1.js 和 2.js
                // 递归。加载3.js
                loadDepsJs(item) // item传的2.js，递归再进来时，就去modules中取2.js的deps了
                // 每次检查一下，是否都加载完了
                checkDeps(); // 循环loadings，配合递归嵌套和modules信息，判断是否都加载完了
            })
        }
    })
}

// 上面（1）那里，加载了2.js后马上会运行2.js的，而2.js里面是
define(['js'], fn)
// 所以相当于执行了 define函数

window.define = function (deps, callback) {
    var id = getCurrentJs()
    if (!modules.id) {
        modules[id] = {
            id: id,
            deps: getDepsIds(deps),
            callback: callback,
            exports: null,
            status: 1,

        }
    }
}

// 注意，define运行的结果，只是在modules中添加了该模块的信息
// 因为其实在上面的loadDepsJs中已经事先做了loadings和递归deps的操作，而且是一直不断的循环往复的进行探查， 所以define里面就不需要再像require中写一次loadDeps了

// 循环loadings，查看loadings里面的id，其所依赖的所有层层嵌套的依赖模块是否都加载完了

function checkDeps() {
    for (var i = 0, id; i < loadings.length; i++) {
        id = loadings[i]
        if (!modules[id]) continue

        var obj = modules[id],
            deps = obj.deps

        // 下面那行为什么要执行checkCycle函数呢，checkDeps是循环loadings数组的模块id，而checkCycle是去判断该id模块所依赖的**层级**的模块是否加载完
        // 即checkDeps是**广度**的循环已经加载（但依赖没完全加载完的）的id
        // checkCycle是**深度**的探查所关联的依赖
        // 还是举例吧。。。假如除了1.js, 2.js, 3.js, 还有个4.js，依赖5.js，那么
        // loadings 可能 是 ['1.js', '4.js']
        // 所以checkDeps --> 1.js，  4.js
        // checkCycle深入内部 1.js --> 2.js --> 3.js ;;; 4.js --> 5.js
        // 一旦比如说1.js的所有依赖2.js、3.js都加载完了，那么1.js 就会在loadings中移出

        var flag = checkCycle(deps)

        if (flag) {
            console.log(i, loadings[i], '全部依赖已经loaded');
            loadings.splice(i, 1);
            // ！！！运行模块，然后同时得到该模块的返回值！！！
            getExport(obj.id)
            // 不断的循环探查啊~~~~
            checkDeps()
        }

    }
}
// 深层次的递归的去判断，层级依赖是否都加在完了
// 进入1.js的依赖2.js，再进入2.js的依赖3.js ......
function checkCycle(deps) {
    var flag = true

    function cycle(deps) {
        deps.forEach(item => {
            if (!modules[item] || modules[item].status == 1) {
                flag = false
            } else if (modules[item].deps.length) {
                //console.log('inner deps', modules[item].deps);
                cycle(modules[item].deps)
            }
        })
    }
    cycle(deps);
    return flag
}

/*
    运行该id的模块，同时得到模块返回值，modules[id].export
*/
function getExport(id) {
    /*
        先想一下，例如模块2.js, 这时 id == 2.js
        define(['3.js', 'xxxx.js'], functionA(B, C) {
            // B得到的就是3.js模块的返回值，C是xxxx.js的
            return aaaaa    // 2.js 模块的返回值
        })
        所以：
        1. 运行模块，就是运行 functionA （模块的callback）
        2. 得到模块的返回值，就是functionA运行后的返回值 aaaaa
        问题：
        1. 运行functionA(B, C)   B, C是什么？怎么来的？
        2. 有B, C 了，怎么运行functionA ？
        
    */
    // 解决问题1
    // B, C 就是该模块依赖 deps [3.js, xxxx.js]对应的返回值啊 
    // 那么循环deps 得到 依赖模块Id, 取模块的export。。。
    var params = [];
    var deps = modules[id].deps
    for (var i = 0; i < deps.length; i++) {
        // 取依赖模块的exports即模块返回值，注意不要害怕取不到，因为你这个模块
        //都进来打算运行了，那么你的所有依赖的模块早都进来过运行完了（还记得模块运行顺序不？）
        let depId = deps[i]
        params.push(modules[depId].exports)
    }
    // 到这里,params就是依赖模块的返回值的数组，也就是B，C对应的实参
    // 也就是 params == [3.js的返回值，xxxx.js的返回值]
    if (!modules[id].exports) {
        // 解决问题2： callback(functionA)的执行，用.apply，这也是为什么params是个数组了
        // 这一行代码，既运行了该模块，同时也得到了该模块的返回值export
        modules[id].exports = modules[id].callback.apply(global, params)
    }
}