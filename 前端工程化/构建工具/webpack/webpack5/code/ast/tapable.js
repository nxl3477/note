const {
  //同步串行的钩子， 不用关心函数的返回值
  SyncHook,
  // 同步串行的钩子 ， 上一个返回值不为null 跳过剩下的逻辑
  SyncBailHook,
  // 同步串行， 上一个值可以传递给下一个值
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook 
} = require("tapable");


const queue = new SyncHook(["name", "name2"])
// 订阅
queue.tap("1", function (name, name2) {
  console.log("1⃣️", name, name2)
  return 1
})

queue.tap("2", function (name, name2) {
  console.log("2⃣️", name, name2)
})

queue.tap("3", function (name, name2) {
  console.log("3⃣️", name, name2)
})


// 触发整个钩子
queue.call('webpack', "webpack-cli")