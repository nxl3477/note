const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const { join } = require('path')


module.exports = {
  entry: [ 
    'react-hot-loader/patch', 
    join(__dirname, '../src/index') 
  ],
  output: {
    path: join(__dirname, '../dist'),
    filename: "bundle-[hash].js"
  },
  resolve: {
    extensions: ['.js', '.jsx', ".tsx"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': join(__dirname, '../src'),
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      },
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { 
        test: /\.tsx?$/,
        loader: ["ts-loader"]
      }
    ] 
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: join(__dirname, '../public/index.html')
    })
  ],
  devServer: {
    contentBase: require('path').join(__dirname, "../dist"),
    compress: true,
    open: true,
    port: 8081,
    // 关闭打印信息
    clientLogLevel: "none",
    hot: true,
    host: "localhost",
  }
}