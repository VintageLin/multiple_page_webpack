# multiple_page_webpack
## 多页面普通项目的webpack配置

    |-- .babelrc                                // babel配置文件
    |-- .gitignore                              // Git忽略文件
    |-- package.json                            // 依赖配置文件
    |-- README.md                               // 自述文件
    |-- build                                   // 生成打包的目录
    |-- src                                     // 开发目录 （内为示例文件）
    |   |-- css                                 // css样式目录
    |   |   |-- index.css
    |   |   |-- reset.css
    |   |   |-- zoom.css
    |   |-- images                              // 图片资源目录
    |   |   |-- 1.jpg
    |   |   |-- 2.jpg
    |   |   |-- 3.jpg
    |   |-- js                                  // js文件目录
    |   |   |-- index
    |   |   |   |-- index.js
    |   |   |-- zoom
    |   |       |-- a.js
    |   |       |-- index.js
    |   |       |-- ok.js
    |   |-- pages                               // html页面文件
    |       |-- index.html
    |       |-- zoom.html
    |-- webpack_config                          // webpack打包配置文件目录
        |-- config.DEV.js                       // webpack开发环境设置
        |-- config.DEV.PORT.js                  // webpack开发环境的端口自动分配
        |-- config.entries.js                   // webpack的入口文件
        |-- config.PROD.js                      // webpack生产环境配置
        |-- webpack.config.js                   // webpack基础设置
## 目的

##### 这个项目主要的内容是 webpack 的打包配置，一个是为了自己学习webpack的一些基础配置方法，另外一个是为了解决自己之前想到的“ webpack 是如何打包普通多页面项目”的问题
##### 目前这个webpack打包配置，还是处于能够完成一些非常简单的多页面打包，里面还有一些问题待解决或者优化

## 一些需要注意的
```
 1. js 目录下，需要创建与 pages 里面 html 文件名一样的文件夹，区分目录。
 2. index.js 为每个页面唯一的入口文件，引用其他js文件则通过import引用进来
 3. 页面的 css 是在 index.js 文件中 import 进来
 （本项目中的 src 目录下的文件均是在创建 webpack 配置时，测试所使用的）

```
## 不是很了解的问题
```
引用了polyfill后多出来了10几KB的内容
```

## 使用方法
```
1. 安装依赖 npm install

2. 启动项目 npm run dev
启动 webpack-dev-server 服务器，默认端口是 9000，有热更新（修改 HTML 暂时不会热更新）

3. 打包项目 npm run build

```

## package.json 中依赖的作用
```
"dependencies": {
  "@babel/polyfill": "^7.7.0",                      // es6 的一些方法转换相关（对babel的使用暂时不是很了解）
  "@babel/runtime": "^7.7.4",
  "@babel/runtime-corejs2": "^7.7.4"
},
"devDependencies": {
  "@babel/core": "^7.7.4",
  "@babel/plugin-transform-runtime": "^7.7.4",
  "@babel/preset-env": "^7.7.4",
  "autoprefixer": "^9.7.2",                         // 自动补全 css3 前缀的插件
  "babel-loader": "^8.0.6",                         // es 语法转换器
  "chalk": "^3.0.0",                                // 控制台输出彩色打印
  "clean-webpack-plugin": "^3.0.0",                 // 清除打包目录
  "css-loader": "^3.2.0",                           // 对 css 的处理
  "file-loader": "^4.3.0",                          // 对引用的一些文件进行处理（这里暂时没用到）
  "glob": "^7.1.6",                                 // 遍历查找文件
  "html-loader": "^0.5.5",                          // 实现页面对资源的引用
  "html-webpack-plugin": "^3.2.0",                  // 生成 HTML 页面模板
  "mini-css-extract-plugin": "^0.8.0",              // 提取 css 到文件
  "optimize-css-assets-webpack-plugin": "^5.0.3",   // 压缩 css 插件
  "portfinder": "^1.0.25",                          // 端口自动查找
  "postcss-loader": "^3.0.0",                       // 解析 css 并且使用相关插件对 css 进行操作
  "style-loader": "^1.0.0",                         // 将 css 插入到页面
  "uglifyjs-webpack-plugin": "^2.2.0",              // 压缩 js
  "url-loader": "^2.3.0",                           // 可以实现将图片等文件转换为 base64（是 file-loader 的增强版）
  "webpack": "^4.41.2",
  "webpack-cli": "^3.3.10",
  "webpack-dev-server": "^3.9.0",
  "webpack-merge": "^4.2.2"                         // 用来合并 webpack 的配置
}
```