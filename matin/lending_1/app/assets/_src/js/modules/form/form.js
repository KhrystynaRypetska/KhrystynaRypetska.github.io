import InputsLabel from './modules/inputsLabel'

export default class Form {
    constructor(inputs = $('.form__field .input')) {
        this.inputs = inputs

    }

    inputsLabel(item) {
        const inputs = new InputsLabel(item)
        inputs.init()
    }

    init() {
        if (this.inputs.length) {
            this.inputsLabel(this.inputs)
        }
    }
}