const CopyPlugin = require('copy-webpack-plugin');
const { join } = require('path')
const minify = require('html-minifier').minify;

console.log('生产环境')
module.exports = {
  // 给文件打 MD5
  output:{
    path: join(__dirname, '../dist/assets'),
    publicPath: "/",
    // webpack有三种hash
    // 1. hash 文件公用同一个md5
    // 2. chunkhash  每一个文件 不同的MD5， 但是被提取的 js 和 css文件会公用 md5
    // 3. contenthash  css文件变了  js 文件不发生变化

    filename: "script/[name].[contenthash:5].bundule.js"
    // filename: '[name].[ext]'
  },
  plugins: [
    // 拷贝components 到dist
    new CopyPlugin([{ 
        // 拷贝走 web/ views/common/pages下的pages 
        from: join(__dirname, "../", "./src/web/views/common/pages/layout.html"), 
        to: '../views/common/pages/layout.html' 
    }]),
    new CopyPlugin([{
      from: join(__dirname, "../", "./src/web/components"),
      to: '../components',
      // html的最后一道鬼门关
      // transform 会拿到一个Buffer
      transform(content) {
        // html hint + fix
        const result = minify(content.toString('utf-8'), {
          // removeAttributeQuotes: true
          collapseWhitespace: true,
          removeComments: true,
          collapseInlineTagWhitespace: true
        });
        return result
      }


    }], {
      // 过滤js文件和css文件
      ignore: ["*.js", "*.css"]
    })
  ]
}