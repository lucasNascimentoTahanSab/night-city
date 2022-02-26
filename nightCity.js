const verticalMin = .6
const verticalMax = .1
const lightBoxShadowX = 0
const lightBoxShadowY = 0
const lightBoxShadowBlurMin = .1
const lightBoxShadowBlurMax = .1
const lightBoxShadowSpreadMin = .1
const lightBoxShadowSpreadMax = .2
const numberOfLightsByCurve = 1.5e3

const f = x => `${Math.random() * (-.0001 * Math.pow(x, 2) + .4 * x - (.1 * window.innerHeight))}px`
const g = x => `${Math.random() * (-.0002 * Math.pow(x, 2) + .2 * x + (.2 * window.innerHeight))}px`
const h = x => `${Math.random() * (-.0003 * Math.pow(x, 2) - .1 * x + (.4 * window.innerHeight))}px`

window.addEventListener('load', () => {
  drawCurve(f)
  drawCurve(g)
  drawCurve(h)
})

function drawCurve(curveFunction) {
  for (let x = 0; x < numberOfLightsByCurve; x++) {
    const light = document.createElement('div')
    const color = getColor()
    const spread = getShadowSpread()

    light.style.bottom = curveFunction(x)
    light.style.left = `${(x)}px`
    light.style.boxShadow = `${lightBoxShadowX} ${lightBoxShadowY} ${getShadowBlur()} ${spread} ${color}`
    light.style.backgroundColor = color

    document.querySelector('body').appendChild(light)
  }
}

function getShadowBlur() {
  return `${(Math.random() * lightBoxShadowBlurMax) + lightBoxShadowBlurMin}rem`
}

function getShadowSpread() {
  return `${(Math.random() * lightBoxShadowSpreadMax) + lightBoxShadowSpreadMin}rem`
}

function getColor() {
  return `#ffff${Math.floor((Math.random() * 0xff)).toString(16).padEnd(2, "0")}`
}