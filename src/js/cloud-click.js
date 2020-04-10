$(function() {
  console.log('loaded')
  var cloud1 = $('#blot__img1');
  var cloud2 = $('#blot__img2');
  var cloud3 = $('#blot__img3');
  var cloud4 = $('#blot__img4');
  var cloud5 = $('#blot__img5');
  cloud1.hover(
    function (ev) {
      console.log()
      window.popup1 = ev.target.offsetParent.offsetParent.children[1]
      showPop(popup1)
  },
    function () {
      hidePop(popup1)
    }
)
cloud2.hover(
  function (ev) {
    console.log()
    window.popup2 = ev.target.offsetParent.offsetParent.children[1]
    showPop(popup2)
},
  function () {
    hidePop(popup2)
  }
)
cloud3.hover(
  function (ev) {
    console.log()
    window.popup3 = ev.target.offsetParent.offsetParent.children[1]
    showPop(popup3)
},
  function () {
    hidePop(popup3)
  }
)
cloud4.hover(
  function (ev) {
    console.log()
    window.popup4 = ev.target.offsetParent.offsetParent.children[1]
    showPop(popup4)
},
  function () {
    hidePop(popup4)
  }
)
cloud5.hover(
  function (ev) {
    console.log()
    window.popup5 = ev.target.offsetParent.offsetParent.children[1]
    showPop(popup5)
},
  function () {
    hidePop(popup5)
  }
)

  function showPop (popup) {
    $(popup).css({'display':'block','z-index':'2000'})
  }
  function hidePop (popup) {
    $(popup).css({'display':'none'})
  }



})
