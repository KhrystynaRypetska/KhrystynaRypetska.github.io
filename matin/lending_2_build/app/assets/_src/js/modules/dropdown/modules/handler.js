export default class DropdownHandler {
  constructor(element = null, className = 'active') {
    this.langSelect = $(element)
    this.container = $(this.langSelect).find('.dropdown')
    this.className = className

  }

  dropdownHandler(item, className) {

    $(item).on('click', (e) => {
      if (this.container.hasClass(className)) {
        this.removeClass(this.container, className)
      } else {
        this.setClass(this.container, className)
      }
    })

  }

  setClass(item, className) {
    $(item).addClass(className)
  }

  removeClass(item, className) {
    $(item).removeClass(className)
  }

  init() {
    this.dropdownHandler(this.langSelect, this.className)
  }
}