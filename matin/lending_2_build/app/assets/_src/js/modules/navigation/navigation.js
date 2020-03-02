import AnchorSmooth from './modules/anchor-smooth'

export default class Navigation {
    constructor() {

    }

    navigationHandler() {
        let item = document.querySelectorAll('a[href^="#"]');

        item.forEach((elem, i)=> {
            const smoothScrollModule = new AnchorSmooth(elem)
            smoothScrollModule.init()
        })
    }

    init() {
        this.navigationHandler()
    }
}