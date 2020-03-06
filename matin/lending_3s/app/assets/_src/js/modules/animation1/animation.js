import ScrollingDeal from './modules/scrollAnimation'

export default class Animation {
  constructor() {
  }

  scrollHandler() {
    const anim = new ScrollingDeal('section', 'animate')
    anim.init()
  }

  init() {
    this.scrollHandler()
  }
}