import MapCreater from './modules/mapInit'

export default class MapModule {
    constructor(container = 'map') {
        this.container = container
    }

    addMap(container) {
        const initMap = new MapCreater(container)
        initMap.init()
    }

    init() {
        this.addMap(this.container)
    }
}