# 环境依赖
1.  npm install -g backstopjs

## 初始化文件
> backstop init 

## 运行测试
> backstop test


## 目录结构
* `backstop.json`中配置期望的运行尺寸，还有设计图地址等等
  * `id` 图像的id， 会生成到图像的最前面
  * `viewports` 视口大小配置
  * `paths` 路径
    * `bitmaps_reference` 参考
    *  `bitmaps_test` 测试脚本
    *  `engine_scripts` 引擎
    *  `html_report` 报表
    *  `ci_report` ci 报表
* `scenarios` 脚本
  * `cookiePath` 访问时的`cookie`路径
  * `url` 你要测试网站的地址
* `engine_scripts` 是`backstop`的引擎
  * `casper` 操作无头浏览器的库, 类似一些鼠标时间
  * `chromy` 对 `chromiu` 版本内核的操作
  * `puppet` 对 `Puppteer` 进行操作
  * `cookies.json` 当你的网站需要 `cookie` 的话，在这里填写你的cookie