const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const entries = require('./config.entries')

module.exports = {
  entry: entries.jsEntries,
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].js'
  },
  // 控制台打印输出配置
  stats: {
    entrypoints: false,
    chunks: false,
    children: false,
    chunkModules: true,
    modules: false
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          }
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: 'url-loader',
        options: {
          name: 'images/[name].[hash].[ext]',
          limit: 10000
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory=true', 'eslint-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    // 模块别名，方便import
    alias: {
      '@': path.resolve(__dirname, '../src/')
    },
    // 自动解析扩展名
    extensions: ['.js', '.json']
  },
  plugins: [
    // 页面模板
    ...entries.htmlWebpackPluginArray,
    // 抽离css到单独文件
    new MiniCssExtractPlugin({
      filename: 'css/[name].css?[hash]',
      chunkFilename: '[id].[hash].css',
      ignoreOrder: false
    })
  ],
  externals: {
    jquery: 'jQuery'
  }
}