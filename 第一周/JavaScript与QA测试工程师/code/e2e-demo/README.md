## e2e依赖 - selenium-webdriver
1. npm i selenium-webdriver --save-dev


forBrowser 浏览器驱动, 你想什么浏览器就装什么, 比如firFox
> 在Npm上找: https://www.npmjs.com/package/selenium-webdriver

* geckodriver下载下来后解压到项目根目录

## Node线程关闭
> process.exit() = process.exit(0)
* `process.exit(1)` 非正常强制关闭进程
* `process.exit(0)` 正常退出


## 错误及解决方案
1. : Cannot find module 'E:\yd_note\第一周\JavaScript与QA测试工程师\code\e2e-demo\e2e\*.spec.js'
> window不支持 node `./ele/*.spec.js` 这样的通配符shell ,真是呵呵, 所以指定文件吧



## rize依赖
> https://rize.js.org/zh-CN/

这是个无头的测试框架 ,puppteer,所以我们无法看到具体过程, 只有在错误时会有信息

1. npm install --save-dev puppeteer rize