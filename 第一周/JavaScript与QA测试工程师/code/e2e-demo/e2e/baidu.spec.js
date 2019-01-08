const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.baidu.com/');
    // 找到这个元素
    await driver.findElement(By.name('wd')).sendKeys('你要搜索的值哦 | 这个是回车=>', Key.RETURN);
    // 匹配一下跳转后的标题是否一致
    await driver.wait(until.titleIs('你要搜索的值哦 | 这个是回车=&gt;_百度搜索'), 1000);
  } finally {
    await driver.quit();
  }
})();