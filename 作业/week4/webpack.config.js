const argv = require('yargs-parser')(process.argv.slice(2))
const _mode = argv.mode || "development"
console.log(_mode)
const { join } = require('path')
const _mergeConfig = require(`./config/webpack.${_mode}.js`)
console.log("香蕉", _mergeConfig)
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlAfterWebpackPlugin = require("./config/HtmlAfterWebpackPlugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 在指定文件夹内查找文件
const glob = require("glob")
// 搜索entry入口文件
let files = glob.sync("./src/web/views/**/*.entry.js")


const _entry = {}
const _plugins = []

// 匹配所有利用glob 搜索到的入口文件
for(let item of files) {
  // 正则解析出关键的文件名， 如： books-create
  if(/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g.test(item) == true) {
    const entryKey = RegExp.$1
    console.log("🍌", entryKey)
    
    // 拼接entry 配置，比如成这样:   { "books-create" :  '../../views/books-create.js'}
    _entry[entryKey] = item
    // 利用合理的命名规范裁剪， 得出文件夹及文件，   books-create =>  ["books", "create"]
    const [dist, template] = entryKey.split("-")
    
    // 根据得出的文件夹及文件拼凑出对于的html文件所在路径， 并将产出目标转移至dist的 views 文件夹下
    _plugins.push(new HtmlWebpackPlugin({
      filename: `../views/${dist}/pages/${template}.html`,
      template: `src/web/views/${dist}/pages/${template}.html`,
      // 指定页面需要的chunk
      chunks: [entryKey],
      inject: false
    }))
  }
}






let baseConfig = {
  entry: _entry,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('postcss-preset-env')({
                  /* use stage 3 features + css nesting rules */
                  stage: 0,
                  features: {
                    'nesting-rules': true
                  }
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "styles/[name].css",
      // [id]是 chunk 的id
      chunkFilename: "styles/[id].css"
    }),
    ..._plugins,
    new HtmlAfterWebpackPlugin()
  ],
  output:{
    path: join(__dirname, './dist/assets'),
    publicPath: "/",
    filename: "script/[name].bundule.js"
    // filename: '[name].[ext]'
  }
}
module.exports = merge( baseConfig, _mergeConfig )

// console.log("用户得到的模式", _mode)




