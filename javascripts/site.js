// This is where it all goes :)

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if ($("#sidenav").hasClass("show")) {
    void(0);
  }
  else {
      if ((prevScrollpos > currentScrollPos) || (currentScrollPos <= 0 ) || ((window.innerHeight + window.scrollY) >= document.body.offsetHeight))  {
        $("#banner").fadeIn();
      } else {
        $("#banner").fadeOut();
      }
    prevScrollpos = currentScrollPos;
    }
  }
