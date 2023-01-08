
const boton = document.getElementById("myBoton");
const myH2 = document.getElementById("myH2");
const myInput = document.getElementById("myInput").value;

const textInput = myInput


function escribe() {
    myH2.textContent = myInput;
    location.reload();
}

boton.addEventListener("click", function(e) {
    myH2.textContent = myInput;
    
});





// boton.addEventListener("click", function(e ) {
//     // presentar la cuenta de clicks realizados sobre el elemento con id "prueba"
//     event.target.innerHTML = "Conteo de Clicks: " + event.detail;
//   }, false);