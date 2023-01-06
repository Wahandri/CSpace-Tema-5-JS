const boton = document.getElementById("button");
const body = document.body;
let i = 0;



boton.onclick = function(){ //Añado Indice y if para alternar colores
    
    i++;
    
    if (i===1) { 
        body.style.backgroundColor = "red"; 
        boton.textContent="Press again";
    } 
    else if (i===2) {
        body.style.backgroundColor = "green"; 
    } 
    else if (i===3) {
        body.style.backgroundColor = "blue"; 
        i=0;
        boton.textContent="Soy un PRO";
    } 
    
    

    console.log(i);

    
};

