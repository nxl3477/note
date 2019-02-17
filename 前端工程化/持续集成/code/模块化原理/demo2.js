// 文件加载/文件运行 顺序： 1.js , 2.js , 3.js
// 模块运行 顺序：3.js , 2.js , 1.js
// 1.js 中（入口用require，其他用define）
require(['2.js'], function(A) {
    // A得到的就是2.js模块的返回值
    // 主要的执行代码
    // 2.js 3.js都加载完，才执行1.js的这回调函数！！！！！！！！！！！！！！！
})

// 2.js 中
define(['3.js', 'xxxx.js'], functionA(B, C) {
    // B得到的就是3.js模块的返回值，C是xxxx.js的
    return 2;   // 2.js 模块的返回值
});

// 3.js 中
define([], functionA() {
    retrun {}   // 3.js 模块的返回值
})