var menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click", showMenu, false);

var sidenav = document.querySelector("#sidenav");
sidenav.addEventListener("click", hideMenu, false);

function showMenu(e) {
    sidenav.classList.add("show");
    sidenavEdge.classList.add("show");
    menuButton.classList.add("hide");
}

function hideMenu(e) {
    sidenav.classList.remove("show");
    sidenavEdge.classList.remove("show");
    menuButton.classList.remove("hide");
}

function openEdge() {
  document.getElementById("banner").style.background = "#FFFFFF";
}

onload = function() {
  document.getElementById("lastModified").innerHTML = "last updated " + document.lastModified;
  document.getElementById("lastModified").setAttribute(
      "style", "font-size: 3vmin");
}

/*
$(function stopScoll() {

    var fixed = document.getElementById('fixed'), overflow;

    $(window).on('load resize', function() {

    overflow = fixed.scrollHeight-$('#fixed').height();
    });

    fixed.on('touchmove', function() {

    if (overflow) return true;
    else return false;
    });
});
*/
