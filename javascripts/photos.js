$(function() {
 var images = ['water1.jpg', 'water2.jpg', 'bridge.jpg', 'siestasunset.jpg', 'palmtrees.jpg', 'fog.jpg', 'reflection.jpg', 'prarie.jpg'];
 $('body').css({'background-image': 'url(./../images/backgrounds/' + images[Math.floor(Math.random() * images.length)] + ')'});
});
