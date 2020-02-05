import options from './mapConfig'

export default class MapCreater {
    constructor(item) {
        this.container = item
    }

    createMAp(container) {
       new google.maps.Map(document.getElementById(container), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
            styles: options
        });
    }

    init() {
        this.createMAp(this.container)
    }
}