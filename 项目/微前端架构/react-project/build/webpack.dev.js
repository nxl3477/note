const webpack = require('webpack');
const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: [ 
    // react热更新
    'react-hot-loader/patch',
    join(__dirname, '../src/index.tsx')
  ],
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: join(__dirname, '../public/index.html')
    }),
  ],
  devServer: {
    contentBase: require('path').join(__dirname, "../dist"),
    compress: true,
    port: 8081,
    hot: true,
    host: "localhost",
    overlay: true, // 编译出现错误时，将错误直接显示在页面上
  }
}