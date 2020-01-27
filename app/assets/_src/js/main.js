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

    function initMap() {
        // Styles a map in night mode.
        let map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.674, lng: -73.945},
            zoom: 12,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "saturation": "-100"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 40
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#4d6059"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#4d6059"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#4d6059"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#4d6059"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#4d6059"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#7f8d89"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#7f8d89"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#2b3638"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#2b3638"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#24282b"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#24282b"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ]
        });
    }
    initMap();
});
