import AnchorSmooth from './modules/anchor-smooth'

export default class Navigation {
    constructor() {

    }

    navigationHandler() {
        let item = document.querySelectorAll('a[href^="#"]');

        console.log(item);
        item.forEach((elem, i)=> {
            console.log(i, elem);
            const smoothScrollModule = new AnchorSmooth(elem)
            smoothScrollModule.init()
        })
    }

    init() {
        this.navigationHandler()
    }
}