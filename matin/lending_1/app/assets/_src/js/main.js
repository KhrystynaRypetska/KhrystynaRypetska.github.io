import Modules from './utils/creater-modules/createrModules'

import detectBrowser from './utils/detectBrowser';
import isMobile from './utils/isMobile';
import removeHoverOnMobile from './utils/removeHoverOnMobile';
import CounterInit from './modules/counter/counter'
import Sliders from './modules/sliders/sliders'
import Navigation from './modules/navigation/navigation'
import Form from './modules/form/form'
import MapModule from './modules/map/mapModule'
import ScrollingDeal from './modules/animation1/animation'

$(document).ready(() => {
  detectBrowser();
  removeHoverOnMobile();
  const modules = new Modules();

  modules.addModules(new removeHoverOnMobile());
  modules.addModules(new CounterInit());
  modules.addModules(new Sliders());
  modules.addModules(new Navigation());
  modules.addModules(new Form());
  modules.addModules(new MapModule());
  modules.addModules(new ScrollingDeal());

  modules.init();

  if (isMobile()) {
    $('body').addClass('mobile');
  }

  function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
  }
  DropDown.prototype = {
    initEvents : function() {
     let obj = this;

      obj.dd.on('click', function(event){
        $(this).toggleClass('active');
        return false;
      });

      obj.opts.on('click',function(){
        let opt = $(this);
        obj.val = opt.find('a').clone();
        obj.index = opt.index();
        obj.placeholder.html(obj.val);

        console.log(obj.val);
      });
    },
    getValue : function() {
      return this.val;
    },
    getIndex : function() {
      return this.index;
    }
  }

  $(function() {

    let dd = new DropDown( $('#dd') );

    $(document).click(function() {
      $('.wrapper-dropdown-1').removeClass('active');
    });

  });

});
