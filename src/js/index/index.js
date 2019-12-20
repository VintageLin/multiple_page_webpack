import '../../css/index.css'
import $ from 'jquery'
console.log('this is index pages alert')
for (let i = 0; i < 10; i++) {
  console.log(i)
}

let test = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 2000)
})

test.then(res => {
  console.log('res: ', res)
})

let arr = [1, 2, 3]
console.log('...arr: ', [...arr])
// document.querySelector('#test').innerHTML = 'change DIV s content: 666'

arr.findIndex(item => {
  return item === 3
})

let arrayLike = {
  0: 'tom',
  1: '65',
  2: '男',
  3: ['jane', 'john', 'Mary'],
  length: 4
}
let arr1 = Array.from(arrayLike)
console.log(arr1)

var testEs = 1
testEs = testEs + 1 + 2
console.log(testEs)

setTimeout(() => {
  $('#img1').fadeOut()
}, 1000)
