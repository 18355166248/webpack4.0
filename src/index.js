import './common/css/base.css'
import logo from './common/images/IMG_1140.jpg'
const $ = require('jquery')

if (process.env.NODE_ENV !== 'production') {
  console.log('不是生成环境 是开发环境')
}

let arr = [1, 2, 3, 4]

function arrIndexExchange(array, x, y) {
  array.splice(x - 1, 1, ...array.splice(y - 1, 1, array[x - 1]))
  return array
}

arr = arrIndexExchange(arr, 2, 3)

function component() {
  var element = document.createElement('div')

  // lodash, now imported by this script
  element.innerHTML = _.join(['hello', 'jianglang', '开始了'], '----')

  var imageP = new Image()
  imageP.src = logo
  imageP.style.width = '100px'
  element.appendChild(imageP)

  var btn = document.createElement('button')
  btn.innerHTML = '点击并检查' + arr
  element.appendChild(btn)

  element.classList.add('show')

  btn.onclick = (e) =>
    import(/* webpackChunkName: "print" */ './print').then((module) => {
      var print = module.default
      print()

      console.log($('<div>123</div>'))
    })

  return element
}

document.body.appendChild(component())
