export default class DropdownHandler {
  constructor(el) {
    this.dd = el
  }

  dropdownHandler(el) {
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
  }

  init() {
    this.dropdownHandler()
  }
}