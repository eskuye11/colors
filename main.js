
const hexElm = document.getElementById('hex')
const rgbElm = document.getElementById('rgb')
const hslElm = document.getElementById('hsl')

const hexText = document.getElementById('hextext')
const rgbText = document.getElementById('rgbtext')
const hslText = document.getElementById('hsltext')


const colorElm = document.getElementById('color')
const btnElm = document.getElementById('getbtn')

class Color {
  constructor(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
  }
  rgb() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`
  }
  rgba(a = 1.0) {
    return `rgb(${this.r}, ${this.g}, ${this.b}, ${a})`
  }
  hex() {
    return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1)
  }
  hsl() {
    let r = this.r
    let g = this.g
    let b = this.b

    r /= 255;
    g /= 255;
    b /= 255;
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
      ? l === r
        ? (g - b) / s
        : l === g
          ? 2 + (b - r) / s
          : 4 + (r - g) / s
      : 0;
    let [hh, ss, ll] = [
      60 * h < 0 ? 60 * h + 360 : 60 * h,
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
      (100 * (2 * l - s)) / 2,
    ];

    return `hsl(${Math.round(hh)}, ${Math.round(ss)}%, ${Math.round(ll)}%)`


  }
}


const getRandomColor = () => {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)

  let colors = new Color(r, g, b)

  return { hex: colors.hex(), rgb: colors.rgb(), hsl: colors.hsl() }

}

const copyCode = (text) => {
  navigator.clipboard.writeText(text)
}

hexElm.addEventListener('click', function () {
  let text = hexText.innerText
  copyCode(text)
})
rgbElm.addEventListener('click', function () {
  let text = rgbText.innerText
  copyCode(text)
})
hslElm.addEventListener('click', function () {
  let text = hslText.innerText
  copyCode(text)
})



btnElm.addEventListener('click', function () {
  const colors = getRandomColor()
  hexText.innerText = colors.hex
  rgbText.innerText = colors.rgb
  hslText.innerText = colors.hsl
  colorElm.style.background = colors.hex
})
