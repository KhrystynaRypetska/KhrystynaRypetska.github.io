import DropdownHandler from './modules/handler'

export default class LangDropdown {

  langDropdown() {
    const langDropdown = new DropdownHandler('#dd')
    langDropdown.init()
  }

  init() {
    this.langDropdown()
  }
}