# multiple_page_webpack
## 多页面普通项目的webpack配置

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
## 为什么会有这个项目？
---
#### 这个项目主要的内容是webpack的打包配置，一个目的是为了自己学习webpack的一些基础配置方法，另外一个是为了解决自己之前想到的“webpack是如何打包普通多页面项目”的问题
#### 目前这个webpack打包配置，还是处于能够完成一些非常简单的多页面打包，里面还有一些问题待解决或者优化

## 一些需要注意的
```
 js目录下，需要创建与pages里面html文件名一样的文件夹，区分目录。
 index.js为每个页面唯一的入口文件，引用其他js文件则通过import引用进来
 
 （本项目中的src目录下的文件均是在创建webpack配置时，测试所使用的）

```

## 使用方法
```
1. 安装依赖 npm install

2. 启动项目 npm run dev
启动webpack-dev-server服务器，默认端口是 9000，有热更新（修改HTML暂时不会热更新）

3. 打包项目 npm run build

```