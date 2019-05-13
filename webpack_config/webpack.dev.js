// 引用webpack基础设置
let webpackBaseConfig = require('./webpack.config')
// 提取css到指定文件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 引用入口文件
const entries = require('./webpack.entries')

const dev_config = {
    mode: 'development',
    plugins: [
      ...entries.HtmlWebpackPluginArray,
      new ExtractTextPlugin({filename: `./css/[name].css`}),
    ]
}

// 合并设置
let development_config = Object.assign({}, dev_config, webpackBaseConfig)

module.exports = development_config
