

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
    let elementBoundary = el.getBoundingClientRect()
    let top = elementBoundary.top
    let bottom = elementBoundary.bottom

    let height = elementBoundary.height

    return ((top + height / 2 >= 0) && (height + window.innerHeight / 2 >= bottom))
  }

  isFullyVisible(el) {
    let elementBoundary = el.getBoundingClientRect()
    let top = elementBoundary.top
    let bottom = elementBoundary.bottom

    return ((top >= 0) && (bottom <= window.innerHeight))
  }

  scrolling(event, className = `${this.className}`) {
    this.listItems.filter((item, index)=> {

      if (this.isPartiallyVisible(item, index) && this.isPartiallyVisible(item, index)) {
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