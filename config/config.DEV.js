const merge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpackUniversalConfig = require('./webpack.config.js')
const PORT = require('./config.DEV.PORT')

const config = {
  mode: 'development',
  devServer: {
    compress: true,             // gzip压缩
    port: PORT,                 // 端口
    hot: true,                  // hot reload
    overlay: true,              // 出现编译器错误或警告时，在浏览器中显示全屏覆盖层
    stats: 'minimal',
    quiet: true
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`当前项目运行在 http://localhost:${PORT}`]
      }
    })
  ]
}

// 合并设置
const config_DEV = merge(config, webpackUniversalConfig)
module.exports = config_DEV