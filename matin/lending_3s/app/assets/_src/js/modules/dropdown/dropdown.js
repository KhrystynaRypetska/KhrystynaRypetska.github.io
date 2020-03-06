import DropdownHandler from './modules/handler'

export default class LangDropdown {

  langDropdown() {
    const langDropdown = new DropdownHandler('#dd', 'active')
    langDropdown.init()
  }

  init() {
    this.langDropdown()
  }
}