console.log('这是来自ok.js')
let testA = 'dnaskjgfajkf大结局范德萨'
let testB = 'DsaDGf根深蒂固房顶上'
console.log(testA + testB)

new Promise(resolve => {
    setTimeout(() => {
        resolve('111111111')
    }, 1000)
}).then(res => {
    console.log(res)
})

var arrs = [1, 2, 3, 4, 5]
var arrs1 = arrs.map(item => {
    return item + 1
})
console.log(arrs1)