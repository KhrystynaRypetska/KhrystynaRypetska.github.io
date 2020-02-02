import Carousels from './modules/Carousels'

export default class Sliders extends Carousels {

    sidersHandler() {
        let owlCarousel = $('.js--owl')

        if (owlCarousel.length) {
            owlCarousel.each((i, el)=> {
                this.carouselOwlStart(owlCarousel[i])
            })
        }

    }

    init() {
        this.sidersHandler()
    }

}