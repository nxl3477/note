const CopyPlugin = require('copy-webpack-plugin');
const { join } = require('path')
module.exports = {
  plugins: [
    // 拷贝components 到dist
    new CopyPlugin([{ 
        // 拷贝走 web/ views/common/pages下的pages 
        from: join(__dirname, "../", "./src/web/views/common/pages/layout.html"), 
        to: '../views/common/pages/layout.html' 
    }]),
    new CopyPlugin([{
      from: join(__dirname, "../", "./src/web/components"),
      to: '../components' 
    }], {
      // 只copy已修改的文件
      copyUnmodified: true,
      // 过滤js文件和css文件
      ignore: ["*.js", "*.css"]
    })
  ]
}