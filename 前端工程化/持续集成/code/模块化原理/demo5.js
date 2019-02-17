window.define = function (callback) {
    var id = getCurrentJs()
    var depsInit = s.parseDependencies(callback.toString())
    var a = depsInit.map(item => basepath + item)
    // 和require.js的define相比，就多了上面的2行代码
    // 1. 把传进来的函数给转换成字符串，'function (){var a = require("2.js")}'
    // 2. 利用一个正则函数，取出字符串中require中的2.js，最后拼成一个数组['2.js']返回来。
    // 3. 之后就和require.js差不多了啊。。。

    // 下面的都差不多
    if (!modules[id]) {
        modules[id] = {
            id: id,
            status: 1,
            callback: callback,
            deps: a,
            exports: null
        }
    }

    s.loadDepsJs(id)

}