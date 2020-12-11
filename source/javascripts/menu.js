/*
var sidenav = document.querySelector("div#sidenav:not(.exclude)");
sidenav.addEventListener("click", hideMenu, false);
*/

var menuButton = document.querySelector("#menuButton");

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

function toggleProfiles() {
  $(".menu-profiles").slideToggle("slow");
  $(".default-menu-items").slideToggle("slow");
}

function toggleProfilesInstagram() {
  $(".menu-profiles").slideToggle("slow");
  $(".menu-profiles-instagram").slideToggle("slow");
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
