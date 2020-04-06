$(function() {
  $("#input--tel").mask("+7 (999) 999-99-99");

  var inpTel = $("#input--tel");
  var inpName = $("#input--name");
  var btn = $('#send-form');

  btn.on('click', function(ev) {
    ev.preventDefault;
    if (inpTel[0].value.length === 18) {
      if (inpName[0].value.length < 2) {
        alert('Поле "Ваше Имя" должно быть не короче двух букв');
        inpName.addClass('error-input');
        setTimeout(function(){inpName.removeClass('error-input')}, 2000)
      } else {
        $.post( "send.php", {'tel': inpTel[0].value, 'name': inpName[0].value},
					function( data ) {
				  		if (data === 'ok') {
                alert('Заявка отправлена, скоро мы вам перезвоним');
              } else {
                alert('Произошла ошибка отправки, попробуйте снова')
              }
				});
      }
    } else {
      alert('Поле "Ваш телефон" должно быть заполнено');
      inpTel.addClass('error-input');
      setTimeout(function(){inpTel.removeClass('error-input')}, 2000)

    }
  })
})
