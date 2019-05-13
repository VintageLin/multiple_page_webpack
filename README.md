# multiple_page_webpack
## 多页面普通项目的webpack配置


    |-- .gitignore                              // Git忽略文件
    |-- package.json                            // 依赖
    |-- README.md                               // 自述文件
    |-- build                                   // 生成打包的目录
    |-- src                                     // 开发目录
    |   |-- css                                 // css样式目录
    |   |   |-- demo.css
    |   |   |-- style.css
    |   |-- images                              // 图片资源目录
    |   |   |-- 1.jpg
    |   |   |-- 2.jpg
    |   |-- js                                  // js文件目录
    |   |   |-- demo
    |   |   |   |-- index.js
    |   |   |   |-- ok.js
    |   |   |-- index
    |   |       |-- index.js
    |   |       |-- math.js
    |   |       |-- ok.js
    |   |       |-- print.js
    |   |-- pages                               // html页面文件
    |       |-- demo.html
    |       |-- index.html
    |-- webpack_config                          // webpack打包配置文件目录
        |-- webpack.config.js                   // webpack基础设置
        |-- webpack.dev.js                      // webpack开发环境设置
        |-- webpack.entries.js                  // webpack的入口文件
        |-- webpack.prod.js                     // webpack生产环境配置

js目录下，需要创建与pages里面html文件名一样的文件夹，区分目录。
src目录内的文件均是创建webpack配置时，测试所使用的