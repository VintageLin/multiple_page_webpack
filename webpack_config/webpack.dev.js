const path = require('path')
// 引用webpack基础设置
let webpackBaseConfig = require('./webpack.config')
// 提取css到指定文件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 引用入口文件
const entries = require('./webpack.entries')

const dev_config = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: false,
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',    // 请求'api/user'会代理到 'http://localhost:8000/api/user'
        pathRewrite: {
          '^/api': ''         // 加了这个请求'api/user'会代理到 'http://localhost:8000/user'
        },
        secure: false,        // 是否开启https代理
        changeOrigin: true
      }
    }
  },
  plugins: [
    ...entries.HtmlWebpackPluginArray,
    new ExtractTextPlugin({filename: `./css/[name].css`}),
  ]
}

// 合并设置
let development_config = Object.assign({}, dev_config, webpackBaseConfig)

module.exports = development_config
