import '../../css/reset.css'
import '../../css/zoom.css'
import atest from './a'
import ok from '@/js/zoom/ok'
console.log('index.js')

var a = [1, 2, 3]
var b = [4, ...a]             // 解构赋值
console.log(b)
let test = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 2000)
})

test.then(res => {
  console.log('res: ', res)
})

console.log(atest)

ok.init()
