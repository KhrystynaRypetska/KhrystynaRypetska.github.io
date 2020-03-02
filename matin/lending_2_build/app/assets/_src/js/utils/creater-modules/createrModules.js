export default class Modules {
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