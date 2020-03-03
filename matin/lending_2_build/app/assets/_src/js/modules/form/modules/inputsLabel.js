export default class InputsLabel {
    constructor(item) {
        this.input = $(item)

    }
    inputsHandler(item) {
        $(item).focusout((e)=>{
            let input = $(e.currentTarget)

            let inputVal = this.getItemValue(input);  //get input value after focusout

            if (inputVal === "")                     //if input value is empty
            {
                this.removeClass(input)

            } else {
                this.addClass(input)
            }
        });
    }

    addClass(item) {
        item.addClass('has-value');
    }

    removeClass(item) {
        item.removeClass('has-value')
    }


    getItemValue(item = '') {
        return $(item).val()
    }

    init() {
        this.inputsHandler(this.input)
    }
}