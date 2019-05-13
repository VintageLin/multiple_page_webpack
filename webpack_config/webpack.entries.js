const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')

// 搜索html页面
let allHtml = glob.sync('./src/pages/*.html')   // 搜索目录下面的html文件
let HtmlWebpackPluginArray = []                 // HtmlWebpackPlugin数组
let pageName = []                            // page页面文件名
for (let htmlFile of allHtml) {
  // page中的html文件名提取
  let htmlName = htmlFile.substring(htmlFile.lastIndexOf('/') + 1)
  let folderName = htmlName.substring(0, htmlName.lastIndexOf('.'))

  const _plugin = new HtmlWebpackPlugin({
    filename: `${folderName}.html`,                       // 打包后的文件名
    template: `./src/pages/${folderName}.html`,           // 页面模板
    chunks: [folderName]                                  // 页面模板用到哪个入口
  })

  HtmlWebpackPluginArray.push(_plugin)
  pageName.push(folderName)
}

// 搜索js入口文件
let jsArray = {}
for (var name of pageName) {
  let jsFiles = glob.sync(`./src/js/${name}/*.js`)
  jsArray[name] = jsFiles
}
const entriesObject = {
  jsArray,
  HtmlWebpackPluginArray
}

module.exports = entriesObject
