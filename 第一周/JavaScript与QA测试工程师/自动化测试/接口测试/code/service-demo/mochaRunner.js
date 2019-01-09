const Mocha = require('mocha')
const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    // 报表产出路径
    reportDir: './docs/mochawesome-report'
  }
});

// ----------测试多个文件------------
// mocha.addFile("./test/*.spec.js")
mocha.addFile("./test/router.spec.js")
// 返回一个出错长度
mocha.run(function(errLength) {
  if(errLength == 0) {
    // 没有错误就正常退出
    process.exit()
  }else {
    console.log(`出错长度${errLength}`)
    // 出异常， 强制退出
    process.exit(1)
  }
})