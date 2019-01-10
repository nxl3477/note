# Backstop可视化回归测试
BackstopJS通过比较DOM截图随时间的变化，自动对响应式Web UI进行可视化回归测试。

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


## Backstop工作流程
* backstop init：设置一个新的BackstopJS实例 - 指定URL，cookie，屏幕大小，DOM选择器，交互等（参见示例目录）

* backstop test： BackstopJS创建一组测试屏幕截图，并将其与参考屏幕截图进行比较。任何更改都会显示在可视化报告中。（根据需要多次更改CSS后运行此命令。）

* backstop approve：如果您运行的测试看起来不错，那么请继续并批准它。批准更改将使用上次测试的结果更新您的参考文件。将来的测试与您最近批准的测试截图进行比较。