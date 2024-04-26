
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