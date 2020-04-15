module.exports = () => {
  const a = document.createElement('div')
  a.innerText = '测试a.js'

  console.log(a)

  ducument.body.appendChild(a)
}
