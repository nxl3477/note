const path = require('path')
const FirstPlugin = require('./plugin/FirstPlugin')
module.exports = {
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: path.resolve("./loader/index.js"),
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // }
    ]
  },
  plugins: [
    new FirstPlugin()
  ]
}