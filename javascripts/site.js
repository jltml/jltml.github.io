// This is where it all goes :)

// Scrolling inertia, from StackOverflow
var checkScrollSpeed = (function(settings){
    settings = settings || {};

    var lastPos, newPos, timer, delta,
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function(){
      newPos = window.scrollY;
      if ( lastPos != null ){ // && newPos < maxScroll
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
})();

// Show/hide banne based on scroll direction and inertia (built off W3Schools example)
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if ($("#sidenav").hasClass("show")) {
    void(0);
  }
  else {
      if (((prevScrollpos > currentScrollPos) && (Math.abs(checkScrollSpeed()) > 5)) || (currentScrollPos <= 0 ) || ((window.innerHeight + window.scrollY) >= document.body.offsetHeight))  {
        $("#banner").fadeIn();
      }
      else if (prevScrollpos < currentScrollPos) {
        $("#banner").fadeOut();
      }
    prevScrollpos = currentScrollPos;
    }
  }
