// 引用webpack基础设置
var webpackBaseConfig = require('./webpack.config')
// 每次打包清理build文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 提取css到指定文件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// css压缩插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// 引用入口文件
const entries = require('./webpack.entries')

const prod_config = {
    mode: 'production',
    plugins: [
      ...entries.HtmlWebpackPluginArray,
      new ExtractTextPlugin({
        filename: `./css/[name].css`
      }),
      new CleanWebpackPlugin(),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        },
        canPrint: true
      })
    ]
}

// 合并设置
let production_config = Object.assign({}, prod_config, webpackBaseConfig)

module.exports = production_config
