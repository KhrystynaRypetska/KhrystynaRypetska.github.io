(function ($) {
  $('.contact-form').submit(function (event) {


    event.preventDefault()
    let form = $('#' + $(this).attr('id'))[0]
    let formClass = $(this).attr('class')

    let inpNameError = $(this).find('.form__field__error_name')
    let inpEmailError = $(this).find('.form__field__error_email')
    let inpTelError = $(this).find('.form__field__error_tel')
    let inpTextError = $(this).find('.form__field__error_text')
    let inpAgreementError = $(this).find('.form__field__error_agreement')
    let inpFileError = $(this).find('.form__field__error_file')

    let modalTpl = '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-stage"></div>' +
      '</div>' +
      '</div>'

    let data = new FormData(form)

    let respond
    try {

      $.ajax({
        url: './postMail.php',
        type: 'POST',
        data: data,
        processData: false,
        contentType: false,
        success: function success(res) {
          try {
            respond = $.parseJSON(res)

          } catch (e) {
            console.log(e)
          }

          if (respond.name) {
            inpNameError.text(respond.name)
          } else {
            inpNameError.text('')
          }

          if (respond.tel) {
            inpTelError.text(respond.tel)
          } else {
            inpTelError.text('')
          }

          if (respond.email) {
            inpEmailError.text(respond.email)
          } else {
            inpEmailError.text('')
          }

          if (respond.text) {
            inpTextError.text(respond.text)
          } else {
            inpTextError.text('')
          }

          if (respond.file) {
            inpFileError.text(respond.file)
          } else {
            inpFileError.text('')
          }

          if (respond.agreement) {
            inpAgreementError.text(respond.agreement)
          } else {
            inpAgreementError.text('')
          }

          if (respond.success) {
            document.getElementById('contact-form').reset()
            $('input, textarea').removeClass('has-value')
            $('.clients-form__btn').attr('disabled', true)

            let tpl = `<div class="compete__message"><h2>${respond.success}</h2></div>`
            window.$.fancybox.open({
              src: tpl,
              type: 'html'

            })
          }
        },
      })
    } catch (e) {
      console.log(e)
    }

  })

  try{
    let inputs = $('.input')
    let checkBox = $('#form__checkbox')
    let input = document.querySelectorAll('.input')

    input.forEach((e) => {
      e.addEventListener('input', updateValue)
    })

    function updateValue(e) {
      let empties = inputs.not('#form__checkbox').not('#tel').filter((i, item) => {
        return $(item).val() === ''
      })

      if (!empties.length && checkBox.prop('checked')) {
        $('.clients-form__btn').removeAttr('disabled')
        window.getRecapchaToken()
      } else {
        $('.clients-form__btn').attr('disabled', true)
      }
    }
  }catch (e) {
    console.log(e)
  }

}(jQuery))