export default class InputsLabel {
  constructor(item) {
    this.input = $(item)
  }

  inputsHandler(item) {
    $(item).blur((e) => {
      let input = $(e.currentTarget)

      let inputVal = this.getItemValueFrom(input)  //get input value after focusout

      if (inputVal === '')                     //if input value is empty
      {
        this.removeClassFrom(input)

      } else {
        this.addClassTo(input)
      }
    })
  }

  addClassTo(item) {
    item.addClass('has-value')
  }

  removeClassFrom(item) {
    item.removeClass('has-value')
  }

  getItemValueFrom(item = '') {
    return $(item).val()
  }

  init() {
    this.inputsHandler(this.input)
  }
}