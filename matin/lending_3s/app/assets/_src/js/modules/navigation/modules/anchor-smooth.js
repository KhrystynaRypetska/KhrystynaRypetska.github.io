export default class AnchorSmooth {
  constructor(item) {
    this.item = item
    this.offset = 0
  }

  addAnchor(item) {
    $(item).each((i, link) => {
      if (link.hash !== '') {
        $(link).on('click', (e) => {
          e.preventDefault()
          this.setOffSet()

          let hash = decodeURI(link.hash)
          let sectionTop = Math.round($(hash).offset().top)

          $('html, body').animate({
            scrollTop: sectionTop - this.offset,
          }, 1200, () => {
            window.location.hash = sectionTop - this.offset
          })
        })
      }
    })
  }

  setOffSet() {
    if (this.getWindowWidth() >= 1025) {
      this.offset = 100
    } else {
      this.offset = 0
    }
  }

  getWindowWidth() {
    return window.innerWidth
  }

  init() {
    this.addAnchor(this.item)
  }
}