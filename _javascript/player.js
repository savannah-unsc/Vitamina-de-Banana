var meuVideo = document.getElementById("playerCustomizado");

function telaCheia(){     

    meuVideo.requestFullscreen(); 

}

function playPause(){     
if (meuVideo.paused) {
  meuVideo.play();
} else {
  meuVideo.pause();
}
}

function ampliar() {
meuVideo.width = 520;
}

function reduzir() {
meuVideo.width = 360;
}

function normal() {
meuVideo.width = 420;
}

function volumeMais() {
if(meuVideo.volume < 1) meuVideo.volume += 0.1;
}

function volumeMenos() {
if(meuVideo.volume > 0) meuVideo.volume -= 0.1;
}

function volumeMudo() {
meuVideo.volume = 0;
}
