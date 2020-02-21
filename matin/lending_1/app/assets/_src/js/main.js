window.$ = jQuery
window.jQuery = jQuery

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
  modules.addModules(new LangDropdown());

  modules.init();

  if (isMobile()) {
    $('body').addClass('mobile');
  }


  (function ($) {
    $(".contact-form").submit(function (event) {
      event.preventDefault();

      // Сохраняем в переменную form id текущей формы, на которой сработало событие submit
      let form = $('#' + $(this).attr('id'))[0];

      console.log(form)
      // Сохраняем в переменные дивы, в которые будем выводить текст ошибки
      let inpNameError = $(this).find('.contact-form__error_name');
      let inpEmailError = $(this).find('.contact-form__error_email');
      let inpTelError = $(this).find('.contact-form__error_tel');

      // Сохраняем в переменную див, в который будем выводить сообщение формы
      let formDescription = $(this).find('.contact-form__description');

      let fd = new FormData(form);

      console.log(fd)
      $.ajax({
        url: "http://landing.loc/",
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        success: function success(res) {
          let respond = $.parseJSON(res);
          console.log(respond.name);
          // if (respond.name) {
          //   inpNameError.text(respond.name);
          // } else {
          //   inpNameError.text('');
          // }
          //
          // if (respond.tel) {
          //   inpTelError.text(respond.tel);
          // } else {
          //   inpTelError.text('');
          // }
          //
          // if (respond.email) {
          //   inpEmailError.text(respond.email);
          // } else {
          //   inpEmailError.text('');
          // }
          //
          // if (respond.attantion) {
          //   formDescription.text(respond.attantion).css('color', '#e84a66').fadeIn();
          // } else {
          //   formDescription.text('');
          // }
          //
          // if (respond.success) {
          //   formDescription.text(respond.success).fadeIn();
          //   setTimeout(() => {
          //     formDescription.fadeOut("slow");
          //   }, 4000);
          //   setTimeout(() => {
          //     formDescription.text('');
          //   }, 5000);
          // }
        },
      });
    });
  }(jQuery));

});
