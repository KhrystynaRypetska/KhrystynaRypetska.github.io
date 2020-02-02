import 'owl.carousel'

export default class Carousels {

    carouselOwlStart(item) {
        $(item).owlCarousel(
            this.owlOptions(item)
        );
    }

    owlOptions(item) {
        let option = {}

        option = {
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            dotsContainer: '.carousel__dots',
            navContainer: '.carousel__wrapper',
            navClass:['owl-prev carousel__nav','owl-next carousel__nav']
        }

        return option
    }

}