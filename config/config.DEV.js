const merge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const chalk = require('chalk')
const log = console.log

const webpackUniversalConfig = require('./webpack.config.js')
const CONSTANT = require('./config.CONSTANT')

const config = {
  mode: 'development',
  devServer: {
    compress: true,               // gzip压缩
    port: CONSTANT.INITIAL_PORT,  // 端口
    hot: true,                    // hot reload
    overlay: true,                // 出现编译器错误或警告时，在浏览器中显示全屏覆盖层
    stats: 'minimal',
    quiet: true,
    host: CONSTANT.HOST
  },
  devtool: 'source-map',
  plugins: []
}

module.exports = new Promise((resolve, reject) => {
  // 端口查找
  portfinder.getPort({
    port: CONSTANT.INITIAL_PORT,           // 起始
    stopPort: CONSTANT.STOP_PORT           // 结束
  }, function (err, res) {
    if (err) {
      log(chalk.red('在当前设定的区间无可使用的端口！'))
      process.exit()
    } else {
      log(chalk.green('当前DEV可运行的端口：', res))
      config.devServer.port = res
      config.plugins.push(new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [`当前项目运行在 http://${CONSTANT.HOST}:${res}`]
        }
      }))
      // 合并设置
      const config_DEV = merge(config, webpackUniversalConfig)
      resolve(config_DEV)
    }
  })
})