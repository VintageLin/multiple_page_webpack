const merge = require('webpack-merge')
const path = require('path')
const webpackUniversalConfig = require('./webpack.config.js')

const config = {
  mode: 'development',
  devServer: {
    compress: true,             // gzip压缩
    port: 9000,                 // 端口
    hot: true,                  // hot reload
    overlay: true,              // 出现编译器错误或警告时，在浏览器中显示全屏覆盖层
    stats: 'minimal'
  }
}

// 合并设置
const config_DEV = merge(config, webpackUniversalConfig)
module.exports = config_DEV