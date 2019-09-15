// 定义一个插件的名字
const pluginName = 'HtmlAfterWebpackPlugin';

const assetsHelp = data => {
  let js = []
  let css = []
  const dir = {
    js: item => `<script class="lazyload-js" src="${item}"></script>`,
    css: item => `<link class="lazyload-css" rel="stylesheet" href="${item}">`
  }

  // 遍历htmlPluginData 上得到的js 
  for(let jsitem of data.js ) {
    js.push(dir.js(jsitem))
  }
  for(let cssitem of data.css ) {
    css.push(dir.css(cssitem))
  }
  return {
    js,
    css
  }
}
// 1. 何时才能拦截最后生成的swig
// 2. 如何分清这个swig文件对应的Js
class HtmlAfterWebpackPlugin {
  // compiler 是webpack的实例
    apply(compiler) {
      // 实例上有钩子， 将插件注册到webpack实例钩子上 （run初始运行阶段, compilation: 完成阶段）
        compiler.hooks.compilation.tap(pluginName, compilation => {
          console.log("🍉webpack 构建过程开始！");
          // 因为webpack的版本更新不友好， 所以新的插件挂载方式需要自己从源码中查找
          // 此阶段是 html-webpack-plugin 提供的，  所以必须在 html-webpack-plugin 之后执行
          
          // Plugin的顺序是 从上至下挂钩子， 但执行顺序不一定 
          compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName, htmlPluginData => {
            let _html = htmlPluginData.html
            const jsResult = assetsHelp(htmlPluginData.assets) 
            // 路径别名
            _html = _html.replace(/views:/g, "../../")
            _html = _html.replace(/components:/g, "../../../components/")
            // 指定位置插入js css
            _html = _html.replace(/<!--injectjs-->/g, jsResult.js.join(""))
            _html = _html.replace(/<!--injectcss-->/g, jsResult.css.join(""))
            // _html = _html.replace("<!--injectjs-->", jsResult.js.join(""))
            htmlPluginData.html = _html
            // htmlPluginData.html = _html
            
          })
        });
    }
}


module.exports = HtmlAfterWebpackPlugin