function generate(){function n(n){for(var t=0;t<6;t++){var a=Math.round(14*Math.random());n+=e[a]}return n}var e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"],t=n("#"),a=n("#"),r=Math.round(360*Math.random()),o="linear-gradient("+r+"deg, "+t+", "+a+")";document.getElementById("container").style.background=o,document.getElementById("output").innerHTML=o}document.onload=generate();