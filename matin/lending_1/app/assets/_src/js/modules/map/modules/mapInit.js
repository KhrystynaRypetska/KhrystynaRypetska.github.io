import options from './mapConfig'

export default class MapCreater {
    constructor(item) {
        this.container = item
    }

    createMAp(container) {
        new google.maps.Map(document.getElementById(container), {
            center: {lat: 55.684685, lng: 37.624105},
            zoom: 15,
            styles: options,
            disableDefaultUI: true
        });
    }

    init() {
        this.createMAp(this.container)
    }
}