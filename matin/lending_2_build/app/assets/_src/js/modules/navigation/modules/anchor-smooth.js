

export default class AnchorSmooth {
    constructor(item) {
        this.item = item
    }

    addAnchor(item) {
        item.addEventListener('click', (e)=> {
            e.preventDefault()

            try{
                let anchor = document.querySelectorAll(e.currentTarget.getAttribute('href'))

                if (anchor.length) {
                    anchor[0].scrollIntoView({
                        behavior: 'smooth'
                    })
                } else {
                    return
                }

            }catch (e) {
                console.log(e);
            }

        })
    }

    init() {
        this.addAnchor(this.item)
    }
}