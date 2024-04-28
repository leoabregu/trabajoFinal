// Juego

let imagenesJuego = document.getElementsByClassName("id-img");
let cajasJuego = document.getElementsByClassName("caja-formato");
let imagenesOrigen = document.getElementById("imagenes-juego");

function jugamos() {
    for (let imagen of imagenesJuego) {
        imagen.addEventListener("dragstart", function(e) {
            let selected = e.target;
            
            for (let caja of cajasJuego) {
                caja.addEventListener("dragover", function(e) {
                    e.preventDefault();
                });
                caja.addEventListener("drop", function(e) {
                    e.preventDefault();
                    caja.appendChild(selected);
                    selected = null;
                    caja.querySelector("p").style.display = "none";
                });

                caja.addEventListener("dragleave", function(e) {
                    caja.querySelector("p").style.display = "block";
                });
            }

            imagenesOrigen.addEventListener("dragover", function(e) {
                e.preventDefault();
            });
            imagenesOrigen.addEventListener("drop", function(e) {
                e.preventDefault();
                imagenesOrigen.appendChild(selected);
                selected = null;
            });
        });
    }
}

jugamos();

function reiniciar() {
  location.reload();
}






