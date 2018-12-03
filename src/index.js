import './common/css/base.css'
import logo from './common/images/IMG_1140.jpg'

if (process.env.NODE_ENV !== 'production') {
  console.log('不是生成环境 是开发环境')
}

function component() {
  var element = document.createElement('div')

  // lodash, now imported by this script
  element.innerHTML = _.join(['hello', 'jianglang', '开始了'], '----')

  var imageP = new Image();
  imageP.src = logo;
  imageP.style.width = '100px';
  element.appendChild(imageP);

  var btn = document.createElement('button')
  btn.innerHTML = '点击并检查'
  element.appendChild(btn)

  element.classList.add('show')

  btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;
    print();
  })

  return element
}

document.body.appendChild(component())
