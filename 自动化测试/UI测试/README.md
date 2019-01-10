# Backstop可视化回归测试
> BackstopJS通过比较DOM截图随时间的变化，自动对响应式Web UI进行可视化回归测试。

如果你使用Backstop 进行像素级的`视觉走查`, 执行测试命令后， 它可以配置不同尺寸环境下的设计图与真实网页对比， 给你标明页面上没有匹配的地方， 哪里的界面是由差异的。


## Backstop功能
* 浏览器内报告用户界面...
  * 可定制的布局
  * 场景显示过滤
  * 参考，测试，视觉差异检查员
  * BackstopJS浏览器报告
* 集成的Docker渲染 - 消除跨平台渲染的恶作剧
* CLI报告
* 使用Chrome Headless，Phantom和Slimer进行测试
* 模拟用户与Puppeteer，ChromyJS和CasperJS脚本的交互
* JUnit报道
* 使用CI和源代码控制很好玩
* 全局或本地作为独立程序包应用程序运行或require('backstopjs')直接运行到您的节点应用程序中
* 非常容易使用：只需3个命令就可以！


## Backstop命令/ 工作流程
* `backstop init`：设置一个新的BackstopJS实例 - 指定URL，cookie，屏幕大小，DOM选择器，交互等（参见示例目录）

* `backstop test`： BackstopJS创建一组测试屏幕截图，并将其与参考屏幕截图进行比较。任何更改都会显示在可视化报告中。（根据需要多次更改CSS后运行此命令。）

* `backstop approve`：如果您运行的测试看起来不错，那么请继续并批准它。批准更改将使用上次测试的结果更新您的参考文件。将来的测试与您最近批准的测试截图进行比较。


## 配置文件分析
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