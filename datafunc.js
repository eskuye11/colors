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

export default Color;





