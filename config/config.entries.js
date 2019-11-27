const glob = require('glob')
const htmlWebpackPlugin = require('html-webpack-plugin')

// 遍历页面寻找src/js/ 下的index.js
let htmlArray = glob.sync('./src/pages/*.html')
let jsEntries = {}
let pagesName = htmlArray.map(item => {
    let newItem = item.slice(item.lastIndexOf('/') + 1)
    newItem = newItem.replace('.html', '')
    jsEntries[newItem] = [`./src/js/${newItem}/index.js`]
    return newItem
})

// 生成html模板
let htmlWebpackPluginArray = []
pagesName.forEach(item => {
    htmlWebpackPluginArray.push(new htmlWebpackPlugin({
        filename: `${item}.html`,
        template: `./src/pages/${item}.html`,
        chunks: [item]
    }))
})

let entries = {
    jsEntries,
    htmlWebpackPluginArray
}
module.exports = entries 