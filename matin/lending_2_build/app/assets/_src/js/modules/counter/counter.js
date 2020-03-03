import CounterModule from './modules/counterModule'

export default class CounterInit extends CounterModule {
    constructor() {
        super()
    }

    findCounter() {
        let item = $('.js--count');
        if (item.length) {
            this.counterHandler("js--count", $(item).text())
        }
    }

    init() {
        this.findCounter()
    }
}