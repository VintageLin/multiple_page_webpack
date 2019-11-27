import '../../css/reset.css'
import '../../css/zoom.css'
console.log('index.js')
import atest from './a'

var a = [1,2,3]
var b = [4, ...a]

let test = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok')
    }, 2000)
})

test.then(res => {
    console.log('res: ', res)
})

console.log(atest)