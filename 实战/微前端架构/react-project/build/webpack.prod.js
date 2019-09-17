// const webpack = require('webpack');
const { join } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const WebpackSystemRegister = require('webpack-system-register');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: [ 
    join(__dirname, '../src/APP.tsx') 
  ],
  output: {
    path: join(__dirname, '../dist'),
    filename: "[name]-[contenthash].js"
  },
  plugins: [
    // 打包前清除缓存
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
      chunkFilename: '[name]-[id]-[contenthash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new WebpackSystemRegister({}),
    // gzip
    // new CompressionWebpackPlugin(),
    // 生成html
  ],
  // optimization: {
  //   minimizer: [
  //     // 压缩css
  //     new OptimizeCssAssetsPlugin()
  //   ],
  //   // 抽离运行时
  //   runtimeChunk: {
  //     name: entrypoint => `runtimechunk~${entrypoint.name}`
  //   },
  //   // code split
  //   splitChunks: {
  //     chunks: 'async',
  //     minSize: 30000,
  //     maxSize: 0,
  //     minChunks: 3,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: '~',
  //     automaticNameMaxLength: 30,
  //     // 会被 chunk具体配置中的name 覆盖， 如果chunk中没有设置， 并且此处 name = true ， 会以key 替代 【name】变量占位符
  //     name: true,
  //     cacheGroups: {
  //       // 注意: priority属性
  //       // 其次: 打包业务中公共代码
  //       common: {
  //         // name: "common",
  //         chunks: "all",
  //         minSize: 1,
  //         priority: 0
  //       },
  //       // 首先: 打包node_modules中的文件
  //       vendor: {
  //         // name: "vendor",
  //         test: /[\\/]node_modules[\\/]/,
  //         chunks: "all",
  //         priority: 10
  //       },
  //       async: {
  //         chunks: "async",
  //         minSize: 1
  //       }
  //     }
  //   }
  // },
  // 性能相关
  performance: {
    // 提示
    hints: "warning", // 枚举
    // 资源大小提示
    maxAssetSize: 20000000, // 整数类型（以字节为单位）
    // 入口文件大小
    maxEntrypointSize: 40000000, // 整数类型（以字节为单位）
    // 匹配文件类型
    assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  }
}