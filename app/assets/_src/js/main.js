import detectBrowser from './utils/detectBrowser';
import isMobile from './utils/isMobile';
import 'slick-carousel';
import '@fortawesome/fontawesome-free/js/all.js';

class Modules {
    constructor() {
        this.modules = [];
        this.env = 'dev';
    }

    log(str) {
        if (this.env === 'dev') {
            console.log(str);
        }
    }

    addModules(module) {
        this.modules.push(module);
    }

    init() {
        this.modules.forEach((item => {
            if (typeof item.init !== 'undefined') {
                this.log(`Module ${item.constructor.name} is init`);
                item.init();
            }
        }))
    }
}

$(document).ready(() => {
    detectBrowser();
    const modules = new Modules();
    modules.addModules(new isMobile());

    modules.init();

    $(function () {
        $('.form__field .input').focusout(function () {
            let any_input = $(this).val(); //get input value after focusout
            if (any_input === "") //if input value is empty
            {
                $(this).removeClass('has-value');
            } else {
                $(this).addClass('has-value');
            }
        });
    });

    const viewportWidth = () => {
        return window.innerWidth;
    };

    if (viewportWidth() <= 992 || isMobile()) {

        $(document).find('.our-team__border').remove();

        $('.js--slider-team').slick({
            autoplaySpeed: 1000,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
        })
    }

    $('.js--slider').slick({
        arrows: true,
        autoplay: false,
        autoplaySpeed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '.js--arrow-left',
        nextArrow: '.js--arrow-right',
    });

    $('.js--slider-2').slick({
        arrows: true,
        autoplay: false,
        autoplaySpeed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '.js--arrow-left',
        nextArrow: '.js--arrow-right',
    });

    const burger = $('.js--burger');
    const menu = $('.banner__navigation');

    burger.on('click', (e) => {

        if (burger.hasClass('active')) {

            burger.removeClass('active');
            menu.removeClass('active');

        } else {

            burger.addClass('active');
            menu.addClass('active');
        }
    });

    const map = (item) => {
        let location = {lat: -25.344, lng: 131.036};
        let mapOptions = new google.maps.Map(item,
            {
                zoom: 4,
                center: location
            });
    };
    map(document.getElementById('map'))
});
