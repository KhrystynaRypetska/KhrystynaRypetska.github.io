import 'owl.carousel'

export default class Carousels {

    carouselOwlStart(item) {
        $(item).owlCarousel(
            this.owlOptions(item)
        );
    }

    owlOptions(item) {
        let option = {}

        let wrapper = $(item).parent('.carousel__wrapper')
        let dotsContainer = wrapper.find('.carousel__dots')

        if ($(item).hasClass('projects-slider')) {
            option = {
                items: 1,
                loop: true,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,
                dotsContainer: dotsContainer,
                navContainer: wrapper,
                navClass:['owl-prev carousel__nav','owl-next carousel__nav']
            }
        }

        if($(item).hasClass('reviews-slider')) {
            option = {
                items: 1,
                loop: true,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 7000,
                dotsContainer: dotsContainer,
                navContainer: wrapper,
                navClass:['owl-prev carousel__nav','owl-next carousel__nav']
            }
        }


        return option
    }

}