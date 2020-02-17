
export default class ScrollingDeal {
  constructor(items = 'section', animateClassName = 'animate') {
    this.isScrolling = false
    this.className = animateClassName
    this.listItems = Array.from(document.querySelectorAll(items))

  }

  throttleScroll(event){
    if (this.isScrolling === false ) {
      window.requestAnimationFrame(() => {
        this.scrolling(event, this.className)
        this.isScrolling = false
      })
    }
    this.isScrolling = true
  }

  isPartiallyVisible(el) {
    //element position x y
    let elementBoundary = el.getBoundingClientRect()

    //elem position top & bottom
    let itemTop = Math.floor(elementBoundary.top)
    let itemBottom = Math.floor(elementBoundary.bottom)
    let itemHeight = Math.floor(elementBoundary.height)

    //window width
    let windowHeight = window.innerHeight

    console.log()

    //return boolean
    return ((itemTop + itemHeight - this.getPercentVal(itemHeight, 10) >= 0) && (itemHeight + windowHeight - this.getPercentVal(itemHeight, 10) >= itemBottom))
  }

  getPercentVal(el, percent) {
    return Math.floor((el / 100) * percent)
  }

  isFullyVisible(el) {
    let elementBoundary = el.getBoundingClientRect()
    let top = elementBoundary.top
    let bottom = elementBoundary.bottom

    return ((top >= 0) && (bottom <= window.innerHeight))
  }

  scrolling(event, className = `${this.className}`) {
    this.listItems.filter((item, index)=> {

      if (this.isPartiallyVisible(item, index)) {
        item.classList.add(`${className}`)
      }
      else {
        item.classList.remove(`${className}`)
      }
    })
  }

  init() {
    try{
      this.scrolling(null, this.className)

      window.addEventListener('scroll', (event)=> {
        this.throttleScroll(event, this.className)
      }, false)

    }catch (e) {
      console.warn(e)
    }
  }
}