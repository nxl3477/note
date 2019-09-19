const { join, resolve } = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const WebpackSystemRegister = require('webpack-system-register');
module.exports = {
  entry: './src/App.vue',
  output: {
    path: join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/', //必须加publicPath
  },
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // 过滤node_modules
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // options: {
            //   indentedSyntax: true
            // }
          }
        ]
      },
      // 处理pug模板语法
      {
        test: /\.pug$/,
        oneOf: [
          // 这条规则应用到 Vue 组件内的 `<template lang="pug">`
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          // 这条规则应用到 JavaScript 内的 pug 导入
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({  // Also generate a test.html
    //   template: 'index.html'
    // }),
    new VueLoaderPlugin(),
    new WebpackSystemRegister({}),
    new webpack.NamedModulesPlugin(), //用于启动HMR时可以显示模块的相对路径
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: 'localhost', //可选，ip
    port: 3000, //可选，端口,
    hot: true,
    inline: true,
    // contentBase: 'dist', //可选，基本目录结构
    compress: true //可选，压缩
  }
}