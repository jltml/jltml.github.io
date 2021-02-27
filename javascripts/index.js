// for the loading screen & runs fullBackground
window.addEventListener("load", function () {
  $("body").addClass("loaded");
  fullBackground();
});

// background image lazy-loading

var images = [
  "water1.jpg",
  "water2.jpg",
  "bridge.jpg",
  "siestasunset1.jpg",
  "palmtrees.jpg",
  "fog.jpg",
  "reflection1.jpg",
  "prarie.jpg",
  "avalanchelake.jpg",
  "bean.jpg",
  "bearheadlakeroad.jpg",
  "bench.jpg",
  "blueorangecarsunset.jpg",
  "brycetree.jpg",
  "building.jpg",
  "canadawater.jpg",
  "carwindowrain.jpg",
  "coloradosunsetwater.jpg",
  "cta.jpg",
  "delicatearch.jpg",
  "dock.jpg",
  "duluthice.jpg",
  "elyevergreens.jpg",
  "empiresplash.jpg",
  "flowers.jpg",
  "frostywindow.jpg",
  "goldengate.jpg",
  "gradient.jpg",
  "grandave.jpg",
  "grandportage.jpg",
  "lighthouse.jpg",
  "lincolnzoo.jpg",
  "michiganwave.jpg",
  "nightminneapolis.jpg",
  "oaklandaerial.jpg",
  "oldwomancove.jpg",
  "owatonna.jpg",
  "pigeonfalls1.jpg",
  "pigeonfalls2.jpg",
  "railroadbridge.jpg",
  "reflection2.jpg",
  "rocks.jpg",
  "rockymountainrainbow.jpg",
  "roosevelt.jpg",
  "rooseveltprarie.jpg",
  "sealion.jpg",
  "sfstreet.jpg",
  "siestasunset2.jpg",
  "stillwater.jpg",
  "sunsetdots.jpg",
  "unbuilding.jpg",
  "utahstars.jpg",
  "waterrocks.jpg",
  "watertree.jpg",
  "woodwater.jpg",
  "weirddashboard.jpg",
  "yosemiteview.jpg",
];
var randomImage = images[Math.floor(Math.random() * images.length)];

function initialBackground() {
  $("<img/>")
    .attr("src", "./../files/images/backgrounds/small/" + randomImage)
    .on("load", function () {
      $(this).remove(); // prevent memory leaks, from StackOverflow
      $("body").css(
        "background-image",
        "url(./../files/images/backgrounds/small/" + randomImage + ")"
      );
    });
  $(".blur").css({ "backdrop-filter": "blur(10px)" });
  $(".blur").css({ "-webkit-backdrop-filter": "blur(10px)" });
  console.log("small background loaded");
}

window.addEventListener("DOMContentLoaded", (event) => {
  initialBackground();
});

function fullBackground() {
  $("<img/>")
    .attr("src", "./../files/images/backgrounds/full/" + randomImage)
    .on("load", function () {
      $(this).remove(); // prevent memory leaks
      $("body").css({
        "background-image":
          "url(./../files/images/backgrounds/full/" + randomImage + ")",
      });
      $(".blur").css({ "backdrop-filter": "blur(0px)" });
      $(".blur").css({ "-webkit-backdrop-filter": "blur(0px)" });
      $(".tinyLoader").css({ display: "none" });
      console.log("full background loaded");
    });
}
