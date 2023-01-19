// Apartado 1

        // const box1 = document.getElementById("textarea");
        // const boton1 = document.getElementById("boton1");
        // const h2_1 = document.getElementById("myh2_1");



        // boton1.addEventListener("click", () => {
        //     if (box1.value.length >= 15) {
        //         h2_1.textContent = "Tiene mas de 15 caracteres";
                
        //     } else {
        //         h2_1.textContent = "Tiene menos de 15 caracteres";
                
        //     }
        // });


// Apartado 2

const boton2 = document.getElementById("button2");
const body2 = document.body;
let i = 0;



boton2.onclick = function(){ //Añado Indice y if para alternar colores
    
    i++;
    
    if (i===1) { 
        body2.style.backgroundColor = "red"; 
        boton2.textContent="Press again";
    } 
    else if (i===2) {
        body2.style.backgroundColor = "green"; 
    } 
    else if (i===3) {
        body2.style.backgroundColor = "blue"; 
        i=0;
        boton2.textContent="Soy un PRO";
    } 
    
    

    console.log(i);

    
};


// Apartado 3

const p1_3 = document.getElementById("parrafo1");
const p2_3 = document.getElementById("parrafo2");
const p3_3 = document.getElementById("parrafo3");

const img3 = document.getElementById("imgX");

function imgClick(X) {
    X.addEventListener("click", function (e) {
        img3.setAttribute("src", X.innerText);
    } );
}

imgClick(p1_3);
imgClick(p2_3);
imgClick(p3_3);


// Apartado 4


const boton4 = document.getElementById("boton4");
const myH2_4 = document.getElementById("myH2_4");
const myInput4 = document.getElementById("input4").value;
const parrafo4 = document.getElementById("parrafo4");
const input4 = document.getElementById("input2_4");


boton4.addEventListener("click", () => {
    parrafo4.textContent = myInput4;
    myInput4 == "";
});

// Apartado 4.2


input4.addEventListener("input", () => {
    myH2_4.textContent = input4.value;
});


// Apartado 5


const box5 = document.getElementById("textarea5");
const boton5 = document.getElementById("boton5");
const h2_5 = document.getElementById("myh2_5");



boton5.addEventListener("click", () => {
    if (box5.value.length >= 15) {
        h2_5.textContent = "Tiene mas de 15 caracteres";
        
    } else {
        h2_5.textContent = "Tiene menos de 15 caracteres";
        
    }
});


// Apartado 6

const myInput6 = document.getElementById("textArea6");
const boton6 = document.getElementById("boton6");


boton6.addEventListener("click", () => {
    if (myInput6.value % 2 === 0 ) {
        myInput6.style.border = "7px solid green";
    } else {
        myInput6.style.border = "7px solid red";
    }
});


// Apartado 7

const myUl = document.getElementById("myUl");

for (let i=1; i <= 10; i++) {
    const newLi = document.createElement("li");
    newLi.textContent = `Elemento ${i}`;
    myUl.appendChild(newLi);
}


// Apartado 8

const newTab = document.getElementById("newTab");
const link = document.getElementById("myLink");


newTab.addEventListener("click", () => link.setAttribute("target", "_blank"));



// Apartado 9

const ap9Paragraph = document.querySelector("#colorsParagraph");

document.querySelector("#colorsSelect").addEventListener("change", e => {
    ap9Paragraph.style.color = e.target.value;
});


// Apartado 10


const listaPares = document.getElementById("listaPares");
let arrayPares = ["Numeros pares: "];
const listaImpares = document.getElementById("listaImpares");
let arrayImpares = ["Numeros impares: "];
const boton110 = document.getElementById("boton110");
let array10 = [0];
i = 1;

listaImpares.value = array10;

// Math.floor(Math.random() * (100 - 1) + 1); // Genera numero ENTERO aleatorio

boton10.addEventListener("click", (e) => {
    array10.push(Math.floor(Math.random() * (100 - 1) + 1));
    if (array10[i] % 2 == 0) {
        arrayPares.push(array10[i]+" ");
    } else {
        arrayImpares.push(array10[i]+" ");
    }
    listaPares.textContent = arrayPares;
    listaImpares.textContent = arrayImpares;
    i++;
    
});


// Apartado 11

const input11 = document.getElementById("input11");
const boton111 = document.getElementById("boton111");
const listNumber = document.getElementById("listNumber");
let array11 = [0];
i = 0;


boton11.addEventListener("click", () => {
    let newIl = document.createElement("li");
    newIl.textContent = input11.value;
    
    function rellenarArray(){
        for (let i = 1; i <= array11.length; i++) {
            listNumber.appendChild(newIl);
        }
    }

    if (array11.indexOf(Number(input11.value)) === -1) {
        
        array11.unshift(Number(input11.value));
        rellenarArray();
    } else {
        window.alert("El numero "+input11.value+" ya esta en la lista")
    }
    
    input11.textContent = "";
    input11.value = "";
    i++;
    
    console.log(array11);
});


// Apartado 12

const boton12 = document.getElementById("boton12");

boton12.onclick = (e) => { e.target.classList.toggle("btn")};