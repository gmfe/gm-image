function isZoom(){
  const div = document.createElement('div')
  div.style.fontSize = '1px'
  div.style.height = '1em'
  div.style.width = '100px'
  div.innerText = 'hello'

  document.body.appendChild(div)
  const fontSize = getComputedStyle(div).fontSize

  document.body.removeChild(div)

  return fontSize !== '12px'
}

export default isZoom
