const loaderUtils = require('loader-utils')

module.exports = function (content, map, meta) {
  //  this 是我们运行时数据调用方法和补充载体 也就是loader函数的执行上下文， 所以可以通过webpack 提供的函
  // 数库来从 this 获取外部 rule 处对 loader 配置的option

  console.log('🍎进入loader')
  console.log('前置钩子内容🍌', this.data)
  const options = loaderUtils.getOptions(this)
  console.log('🍊获取到的配置文件', options)
  return content + ";console.log(1)"
}

// 一个叫pitch的前置钩子 ( 在进入⬆️主体前触发)
module.exports.pitch = function (r, prerequest, data) {
  console.log("进入前置钩子")
  data.value = "are you ok"
}