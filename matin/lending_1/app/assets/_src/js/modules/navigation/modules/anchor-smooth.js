

export default class AnchorSmooth {
    constructor(item) {
        this.item = item
        this.offset = 0
    }

    addAnchor(item) {
        item.addEventListener('click', (e)=> {
            e.preventDefault()

            this.setOffSet()
            try{
                let anchor = document.querySelectorAll(e.currentTarget.getAttribute('href'))

                console.log(anchor)
                if (anchor.length) {
                    anchor[0].scrollIntoView({
                        behavior: 'smooth'
                    })

                    // console.log(anchor[0])
                    // console.log(anchor)
                    // console.log(this.offset)
                    // window.scrollTo({
                    //     top: anchor[0].getBoundingClientRect() - this.offset,
                    //     behavior: 'smooth'
                    // })
                } else {
                    return
                }

            }catch (e) {
                console.log(e);
            }

        })
    }

    setOffSet() {
        if(this.getWindowWidth() >= 1024 ) {
            this.offset = 100
        } else {
            this.offset = 0
        }
    }

    getWindowWidth() {
        return window.innerWidth
    }

    init() {
        this.addAnchor(this.item)
    }
}