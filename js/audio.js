var v = document.getElementsByTagName("audio")[0];
var sound = false;

var boton = document.getElementById("BotonAudio");
boton.addEventListener("click", function(){
  if (!sound) {
    v.play();
    this.innerHTML = "🕪";
    sound = true;
  } else {
    v.pause();
    this.innerHTML = "🕨";
    sound = false;
  }
});