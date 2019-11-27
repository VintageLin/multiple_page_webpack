const portfinder = require('portfinder')
const chalk = require('chalk')
const log = console.log

module.exports = new Promise((resolve, reject) => {
  // 端口查找
  portfinder.getPort({
    port: 9000,           // 起始
    stopPort: 9999        // 结束
  }, function (err, res) {
    if (err) {
      log(chalk.red('在当前设定的区间无可使用的端口！'))
      process.exit()
    } else {
      log(chalk.green('当前DEV运行的端口：', res))
      resolve(res)
    }
  })
})