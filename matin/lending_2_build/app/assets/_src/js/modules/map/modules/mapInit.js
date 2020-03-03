import options from './mapConfig'

export default class MapCreater {
    constructor(item) {
        this.container = item
    }

    createMAp(container) {
       const map = new google.maps.Map(document.getElementById(container), {
            center: {lat: 55.684685, lng: 37.624105},
            zoom: 15,
            styles: options,
            disableDefaultUI: true
        });

        let marker = new google.maps.Marker({
            map: map,
            position: {lat: 55.684685, lng: 37.624105},
            icon: {
                url: "../assets/img/svg/PCBuild-Logo-map.svg"
            }
        });
    }

    init() {
        this.createMAp(this.container)
    }
}