
// VIDEO DE HISTORIA

let video=document.querySelector("video");
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");

function botones() {
    playBoton.addEventListener("click",()=>{
        video.play();  
    });
    
    pauseBoton.addEventListener("click",()=>{
        video.pause();
    });    
}
botones();

let tiempoVideo = document.getElementById('tiempo_video');

function segundosAMinutos(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = Math.floor(segundos % 60);
    return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
};

function actualizarTiempo() {
    tiempoVideo.textContent = `Duración del video ${segundosAMinutos(video.currentTime)} / ${segundosAMinutos(video.duration)}`;
};

video.addEventListener('timeupdate', actualizarTiempo);