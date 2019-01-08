const Rize = require('rize')
const rize = new Rize()
rize
  .goto('https://github.com/')
  .type('input.header-search-input', 'node')
  .press('Enter')
  .waitForNavigation()
    // 全页面搜索判断是否出现这段代码, 所以很慢
  .assertSee('Node.js')
  .end()  // 别忘了调用 `end` 方法来退出浏览器！