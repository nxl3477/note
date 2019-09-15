const Rize = require('rize')

module.exports = async (option) => {
  const rize = new Rize(option)
  try {
    await rize
      .goto('http://localhost:3000/books/index')
      .waitForNavigation()
      .assertTitle('图书管理系统')
      .click('.update_btn')
      .waitForNavigation()
      .type('[name="name"]', '测试名称')
      .type('[name="auther"]', '测试作者')
      .type('[name="price"]', '888')
      .click('button[type="submit"]')
      .waitForNavigation()
      .assertSee('天龙八部')
      .end()
      return true
  }catch(e) {
    await rize.end()
    return false
  }
}

