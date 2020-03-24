window.addEventListener("load", function(){
    $('body').addClass('loaded');
});

window.onload = $(function() {
 var images = ['water1.jpg', 'water2.jpg', 'bridge.jpg', 'siestasunset1.jpg', 'palmtrees.jpg', 'fog.jpg', 'reflection1.jpg', 'prarie.jpg', 'avalanchelake.jpg', 'bean.jpg', 'bearheadlakeroad.jpg', 'bench.jpg', 'blueorangecarsunset.jpg', 'brycetree.jpg', 'building.jpg', 'canadawater.jpg', 'carwindowrain.jpg', 'coloradosunsetwater.jpg', 'cta.jpg', 'delicatearch.jpg', 'dock.jpg', 'duluthice.jpg', 'flowers.jpg', 'frostywindow.jpg', 'goldengate.jpg', 'gradient.jpg', 'grandave.jpg', 'grandportage.jpg', 'lighthouse.jpg', 'lincolnzoo.jpg', 'michiganwave.jpg', 'nightminneapolis.jpg', 'oaklandaerial.jpg', 'oldwomancove.jpg', 'owatonna.jpg', 'pigeonfalls1.jpg', 'pigeonfalls2.jpg', 'reflection2.jpg', 'rocks.jpg', 'rockymountainrainbow.jpg', 'roosevelt.jpg', 'rooseveltprarie.jpg', 'sealion.jpg', 'sfstreet.jpg', 'siestasunset2.jpg', 'stillwater.jpg', 'unbuilding.jpg', 'utahstars.jpg', 'waterrocks.jpg', 'watertree.jpg', 'woodwater.jpg', 'weirddashboard.jpg', 'yosemiteview.jpg'];
 $('body').css({'background-image': 'url(./../images/backgrounds/' + images[Math.floor(Math.random() * images.length)] + ')'});
});
