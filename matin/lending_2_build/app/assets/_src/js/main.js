import fancybox from './vendor/jquery.fancybox.min'

window.$ = jQuery
window.jQuery = jQuery
window.fancybox = fancybox

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
import LangDropdown from './modules/dropdown/dropdown'
import masck               from 'jquery-mask-plugin'

$(document).ready(() => {
  detectBrowser();
  removeHoverOnMobile();
  const modules = new Modules();

  modules.addModules(new removeHoverOnMobile());
  modules.addModules(new CounterInit());
  modules.addModules(new Sliders());
  modules.addModules(new Navigation());
  modules.addModules(new Form());
  modules.addModules(new ScrollingDeal());
  modules.addModules(new LangDropdown());

  modules.addModules(new MapModule());

  modules.init();

  if (isMobile()) {
    $('body').addClass('mobile');
  }
  $('#tel').mask('+9 (999) 999-99-99')
});
