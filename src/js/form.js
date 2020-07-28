$(function() {
  $("#input--tel").mask("+7 (999) 999-99-99");

  var formNodeList = document.querySelectorAll('form');
  var formList = Array.prototype.slice.call(formNodeList);

  function getSendResult (res) {
    console.log(res)
    if (res != 'ok') {
      alert('Ошибка отправки, попробуйте еще раз!')
    } else {
      alert('Ваша заявка отправлена!')
    }
  }

  formList.map(form => {
    form.addEventListener('submit', function(ev) {
      console.log('SUBMIT')
      ev.preventDefault()
      var sendBody = $(this).serialize()

      console.log('sendBody')
      console.log( sendBody )

        fetch("send.php", { 
            method: "POST",
            body: sendBody,   
            headers:{"content-type": "application/x-www-form-urlencoded"} 
          })
        .then(res => {return res.text()})
        .then(text => {getSendResult(text)})

        

    })
    

  })

})
