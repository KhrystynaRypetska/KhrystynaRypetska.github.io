import detectBrowser from './utils/detectBrowser';
import isMobile from './utils/isMobile';
import removeHoverOnMobile from './utils/removeHoverOnMobile';
import CounterInit from './modules/counter/counter'
import Sliders from './modules/sliders/sliders'
import Navigation from './modules/navigation/navigation'

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
  removeHoverOnMobile();
  const modules = new Modules();

  modules.addModules(new removeHoverOnMobile());
  modules.addModules(new CounterInit());
  modules.addModules(new Sliders());
  modules.addModules(new Navigation());

  modules.init();

  if (isMobile()) {
    $('body').addClass('mobile');
  }
});
