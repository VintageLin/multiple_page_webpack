const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const merge = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackUniversalConfig = require("./webpack.config.js")

const config = {
  mode: 'production',
  output: {
    // 公共目录定位到当前文件夹下
    publicPath: './'
  },
  performance: {
    hints: false 
  },
  plugins: [
    // 每次打包前清空打包目标文件夹
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      // js压缩
      new UglifyWebpackPlugin({
        parallel: 4
      }),
      // css压缩
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css/,       // 需要优化压缩的文件名
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    ],
    // 代码拆分
    splitChunks: {
      cacheGroups: {
        // 打包node_modules中的文件
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 10
        }
      }
    }
  }
}

const config_PROD = merge(config, webpackUniversalConfig)
module.exports = config_PROD