const argv = require('yargs-parser')(process.argv.slice(2))
const _mode = argv.mode || "development"
const { join } = require('path')
const _mergeConfig = require(`./config/webpack.${_mode}.js`)
const merge = require("webpack-merge")
// 在指定文件夹内查找文件
const glob = require("glob")
const files = glob.sync("./src/web/views/**/*.entry.js")
const HtmlWebpackPlugin = require("html-webpack-plugin")


const _entry = {}
const _plugins = []
for(let item of files) {
  if(/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g.test(item) == true) {
    const entryKey = RegExp.$1
    console.log("🍌", entryKey)
    _entry[entryKey] = item
    const [dist, template] = entryKey.split("-")

    _plugins.push(new HtmlWebpackPlugin({
      filename: `views/${dist}/pages/${template}.html`,
      template: `src/web/views/${dist}/pages/${template}.html`,
      inject: false
    }))
  }
}


module.exports = {
  entry: _entry,
  plugins: [
    ..._plugins
  ],
  output:{
    path: join(__dirname, 'dist'),
    // filename: '[name].[ext]'
  }
}

// console.log("用户得到的模式", _mode)




