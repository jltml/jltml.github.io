$('.js-back').on('click', function(evt) {
  if (document.referrer.indexOf(window.location.host) !== -1){
    evt.preventDefault();
    history.back();
  }
});
