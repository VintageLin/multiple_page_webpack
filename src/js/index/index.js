// import printMe from './print'
import '../../css/style.css'
import '../../css/demo.css'
import { square, cube } from './math'

// function component () {
//     var element = document.createElement('div')
//     var btn = document.createElement('button')

//     element.innerHTML = 'hello'

//     btn.innerHTML = 'click me and check the console'

//     btn.onclick = printMe

//     element.appendChild(btn)

//     console.log(square(5))
//     console.log(cube(5))

//     return element

// }

// let element = component()
// document.body.appendChild(element);


// if(module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('print.js接受更新...')
//         // printMe()
//         document.body.removeChild(element)
//         element = component()
//         document.body.appendChild(element)
//     })
// }

let s = cube(3)
console.log(s)
console.log('这里是index.js')
