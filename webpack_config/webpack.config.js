const path = require('path')
// 提取css到指定文件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 引用入口配置文件
const entries = require('./webpack.entries')

const config = {
  entry: JSON.parse(JSON.stringify(entries.jsArray)),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash].js'
  },
  // loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                targets: {
                  ie: 7,
                  chrome: 52
                }
              }
            ]
          ],
            plugins: ['transform-runtime']
          }
        }
      },
      {
        test: /\.(jpg|jpeg|png|webp|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          publicPath: '../',                // 为你的文件配置自定义 public 发布目录
          name: 'images/[name].[hash].[ext]',
        }
      }
    ]
  }
}

module.exports = config
