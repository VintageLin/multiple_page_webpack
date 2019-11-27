import '../../css/index.css'
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


let arr = [1, 2, 3];
console.log('...arr: ', [...arr]);
// document.querySelector('#test').innerHTML = 'change DIV s content: 666'