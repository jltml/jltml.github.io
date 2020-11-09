function fullBackground() {
  $('body').css({'background-image': 'url(./../images/backgrounds/full/' + randomImage + ')'});
  $('.blur').css({'backdrop-filter': 'blur(0px)'});
}

window.onload {
  fullBackground();
});
