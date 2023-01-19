// Eercicios Sintaxix Basica Javascript

//  Los apartados se pueden resolver de la manera que nos resulte más sencilla siempre que sigamos las
//  posibles restricciones que se definan. Deben realizarse en un mismo archivo javascript separándolos con
//  comentarios de forma clara. Deberemos tener cuidado con redifinir variables / constantes con el mismo
//  nombre. Cuando no sepamos la respuesta a un apartado por nosotros mismos, se puede (y debe) investigar
//  en la chuleta y en internet. Es obligatorio comprobar por consola el correcto estado de las variables y el
//  correcto funcionamiento de las funciones de cada apartado.




//          Ejercicio 1.
// 1. Define e inicializa un array con 5 elementos string en una 
// sola línea.

let primerArray = ["1", "2", "3", "4", "5"];
console.log(primerArray);

console.log("_________________EJ_1___________________________");

//          Ejercicio 2.
// 2. Define un array inicialmente vacío. Añade tres elementos 
// de tipo number posteriormente. Elimina por completo el primero 
// y añade dos nuevos números al inicio. En cada paso, imprime la 
// longitud y el array entero por consola utilizando un string 
// template del tipo: `Longitud: ${}`.

let arrayVacio = [];

arrayVacio.push(1, 2, 3,);
console.log(arrayVacio);

arrayVacio.shift();
arrayVacio.unshift(4, 5);
console.log(arrayVacio); console.log(arrayVacio.length);

console.log("________________EJ_2____________________________");

//          Ejercicio 3.
// 3. Escribe una función nombrada que devuelva true si el 
// argumento dado es de tipo boolean y false en caso contrario. 

let argumento = 0;

function myFuncion(X) {
    
    if (typeof(X) === "boolean") {
        return true;
    } else {
        return false;
    }


}
console.log(myFuncion(true));

console.log("________________EJ_3____________________________");

//          Ejercicio 4.
// Escribe una función que devuelva la longitud de un string 
// recibido por argumento

let texto = "En un lugar de la mancha";

function longitud(X) {
    return X.length;
}

console.log(longitud(texto));

console.log("_______________EJ_4_____________________________");

//          Ejercicio 5.
// Crea una función de flecha que reciba una cantidad de minutos
// y lo devuelva convertido en segundos

const segundos = min => min * 60;
console.log(segundos(1));

console.log("______________EJ_5______________________________");

//          Ejercicio 6.
// Crea una función que reciba un número y devuelva el siguiente 
// número par. (Si él es par, lo devolverá directamente).

let numeroEj6 = 4;

function esPar (Num) {
    if (Num % 2 == 0) {
        return Num+" Es numero PAR";
    } else {
        return Num+" Es numero INPAR";
    }
}

console.log(esPar(32));

console.log("______________EJ_6______________________________");

//          Ejercicio 7.
//Crea una función que reciba una edad y devuelva la cantidad de 
// días que esa persona ha vivido. Puedes obviar los años bisiestos.

let edadEj7 = 1;

function diasVida(years, months) {
   return years * 365;
}

console.log(diasVida(29));

console.log("_______________EJ_7_____________________________");

//          Ejercicio 8.
// Crea una función que reciba un array y devuelva su último 
// elemento. Prueba tu función con varios arrays de diferentes 
// longitudes.

let lista1 = ["A", "B", "C"];
let lista2 = [1, 2, 3, 4, 5, 6];
let lista3 = [true, false, true, false];

function latest(X) {
    X.reverse();
    return X[0];
}

console.log(latest(lista1));
console.log(latest(lista2));
console.log(latest(lista3));

console.log("______________EJ_8_______________________________");

//          Ejercicio 9.
// Un granjero necesita contar la cantidad de patas de los animales
//  en sus diferentes granjas muy frecuentemente, pero tiene tres 
//  especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas).
//  Tu función recibirá la cantidad de animales en ese orden y 
//  devolverá la cantidad de patas totales. Ejemplo:
// countLegs(5, 2, 8); // output: 50

let pollos = 1;
let vacas = 1;
let cerdos = 1;

function contPatas(pollos, vacas, cerdos) {
    pollos = pollos * 2;
    vacas = vacas * 4;
    cerdos = cerdos *4;
    return pollos + vacas + cerdos;
}

console.log(contPatas(2,3,7));

console.log("_____________EJ_9_______________________________");

//          Ejecicio 10.
// Crea una función que determine si dos datos recibidos por 
// argumentos son del mismo tipo.

let argu1 = ["hola", "adios"];
let argu2 = [1, 2, 3];
let argu3 = true;

function compTipo(X, Y) {
    if (typeof(X) === typeof(Y)) {
        return X + " y " + Y + " SI son del mismo tipo";
    } else  {
        return X + " y " + Y + " NO son del mismo tipo";
    }
}

console.log(compTipo(argu1, argu2));
console.log(compTipo(argu1, argu3));

console.log("_____________EJ_10_______________________________");

//          Ejercicio 11.
// . Crea una función que reciba un string con una frase y 
// devuelva un array donde cada elemento será una palabra de la 
// frase original. Investigar método existente de los strings para 
// este fin.

let fraseEj11 = "En un lugar de la mancha";

function arrayFrase(frase) {
    return frase.split("");
}

console.log(arrayFrase(fraseEj11));

console.log("_____________EJ_11_______________________________");

//          Ejercicio 12.
//  Inicializa dos objetos, address1 y address2 con las 
// propiedades: provincia, ciudad, municipio, código postal, 
// calle, número, planta, y número de puerta.

const address1 = {
    ciudad: "Malaga",
    codigoPostal: 29010,
    calle: "Trinquete",
    bloque: 12,

}
const address2 = {
    ciudad: "Malaga",
    codigoPostal: 29055,
    calle: "Sin querer",
    bloque: 44,
}
console.log(address1, address2);

console.log("_____________EJ_12_______________________________");

//          Ejercicio 13.
// Los dominios en la web, se componen del nombre de 
// dominio (codespaceacademy) y de un TLD (toplevel domain) como, 
// por ejemplo .com / .es / .org, etc. Crea una función que se llame 
// parseDomain() que reciba por argumento un string y devuelva un 
// objeto con dos propiedades: domain y tld.

let linkWeb = "tusabepapi.com";

function paseDomain(string) {
    let sentencia = string.split(".");
    let myDomain = sentencia[0];
    let myTld = sentencia[1];

    return domainWeb = {
        domain: myDomain,
        tld: myTld
    }
}

console.log(paseDomain(linkWeb));

console.log("_____________EJ_13_______________________________");

//          Ejercicio 14
// Nos han prohibido el uso del operador de igualdad estricta (===),
// pero queremos poder seguir utilizando dicha esa funcionalidad.
// Crea una función que devuelva true si dos números tienen el mismo
// valor y el mismo tipo de dato. Debemos usar el operador lógico “&&”.

let num1_14 = 4;
let num2_14 = 4;

function comparacion(n1, n2) {
    if (typeof(n1) != typeof(n2) || n1 != n2) {
        return false;
    } else  {
        return true;
    }
}

console.log(comparacion(2,2));

console.log("_____________EJ_14_______________________________");

//          Ejercicio 15.
// Crea una función que reciba dos strings y devuelva true si 
// tienen la misma longitud y false en caso contrario.

let texto1 = "Hola que ase";
let texto2 = "mal tiempo";

function comparaLength(X, Y) {
    if (X.length === Y.length) {
        return true;
    } else {
        return false;
    }
}

console.log(comparaLength(texto1, texto2));

console.log("_____________EJ_15_______________________________");

//          Ejercicio 16.
// . Crea una función que reciba un string y determine si está 
//  vacío sin utilizar la propiedad length.

let stringVacio = "";
let stringLleno = "Hola Coder";

function vacioOrNo(X) {
    if (typeof(X[0]) === "undefined") {
        return "El String esta VACIO"
    } else {
        return "El String esta LLENO"
    }
}

console.log(vacioOrNo(stringVacio));
console.log(vacioOrNo(stringLleno));

console.log("_____________EJ_16_______________________________");

//          Ejercicio 17.
// Imprimir elemento a elemento el array del apartado 1 de 
// cuatro formas diferentes:

// • while
// • for
// • for of
// • forEach

console.log("**While**");
let i = 0;

while (i < primerArray.length) {
    console.log(primerArray[i]);
    i++;
}

console.log("**for**");

for (let i = 0; i < primerArray.length; i++) {
    console.log(primerArray[i]);
}

console.log("**for of**");

for (const item of primerArray){
    console.log(item);
};

console.log("**forEach**");

primerArray.forEach(function(    item,            index){
    console.log(`${index} : ${item}`);
});


console.log("_____________EJ_17_______________________________");

//          Ejercicio 18.
// Crea una función que reciba un string y un número N y devuelva 
// el string original repetido N veces.

let texto18 = "Hola CodeNautas ";
let num18 = 4;

function repeatText(text, num) {
    let newText18 = text.repeat(num);
    return newText18; 
}

console.log(repeatText(texto18, num18));

console.log("_____________EJ_18_______________________________");

//          Ejercicio 19.
// . Crea una función que recibe un objeto con dos campos, votos 
// positivos y votos negativos y que devuelva la cuenta final.

campo1 = {
    votosOk: 10,
    votosNull: 5,
}
campo2 = {
    votosOk: 10,
    votosNull: 20,
}

function votos(objeto) {
    result = objeto.votosOk - objeto.votosNull
    return result;
}

console.log(votos(campo1));
console.log(votos(campo2));

console.log("_____________EJ_19_______________________________");

//          Ejercicio 20.
//  Crea una función que recibe un array de tipos de datos mezclados 
// y que devuelva otro array con el tipo de cada uno de los elementos.

arrayMix = ["Hola", 4, false, "Adios", 8, true];


function ej20(X) {
    let listType = [];
    for (i=0; i < X.length; i++) {
        listType.push(typeof(arrayMix[i]));
    }
    return listType;
};

console.log(ej20(arrayMix));

// for (i=0; i < arrayMix.length; i++) {
//     console.log(arrayMix[i]);
//     console.log(arrayMix[i]);
// }


console.log("_____________EJ_20_______________________________");


//          Ejercicio 21.
// Función que dado un array de números con formato string devuelva 
// un array con los números ya parseados.

let array20 = [];
console.log(primerArray);

for (let i = 0; i < primerArray.length; i++) {
    array20[i] = (parseInt(primerArray[i]));
    
}

console.log(array20);

console.log("_____________EJ_21_______________________________");


//          Ejercicio 22.
// Crea una función de flecha que devuelva “Positivo” si el número 
// que recibe por argumento es mayor o igual que cero y “Negativo” en 
// caso contrario. Usa el operador ternario.

function flecha(num) {
    if (num >= 0) {
        return "El numero "+num+" es Positivo";
    } else {
        return "El numero "+num+" es Negativo";
    }
} 

console.log(flecha(3));
console.log(flecha(-5));
console.log(flecha("7"));
console.log(flecha("-7"));
console.log(flecha(0));

console.log("_____________EJ_22_______________________________");

//          Ejercicio 23.
// Crea una función que dado un array cualquiera y un índice, borre
//  el elemento guardado en ese índice.

function borraI(array, i) {
    array.splice(i, 1);
}

console.log(lista2);
console.log(lista2[1]);

borraI(lista2,1); //

console.log(lista2);

console.log("_____________EJ_23_______________________________");


//          Ejercicio 24.
// Usando la función del apartado anterior, crea otra función que dado 
// un array de números y un número a filtrar, devuelva un array borrando 
// todos las apariciones de dicho número.

let array24 = [1,2,3,1,2,3,1,2,3,1,2,3];

function deleteArray(array, num) {
    let i = 0;
    while (i < array.length) {
        if (array[i] === num) {
            borraI(array, i);
        }
        i++;
    } 
}

console.log(array24);

deleteArray(array24, 3);

console.log(array24);

console.log("_____________EJ_24_______________________________");


//          Ejercicio 25.
// Crea dos funciones que recibirán un objeto, la primera devolverá 
// un array con los nombres de todas sus propiedades. La segunda 
// devolverá un array con los valores de dichas propiedades.
// Investigar los métodos keys y values del prototipo de Object.

function propiedades(obj) {
    return Object.keys(obj);
}
console.log(propiedades(address1));

function valores(obj) {
    return Object.values(obj);
}
console.log(valores(address1));

console.log("_____________EJ_25_______________________________");


//          Ejercicio 26.
//  Crea una función que invierta un string.

let string26 = "En un lugar de la mancha";


function reverseText(text) {
    let newText = ""

    for (i = text.length-1; i >= 0; i--) {
        newText += text[i];
    }
    return newText
}

console.log(string26);
console.log(reverseText(string26));

console.log("_____________EJ_26_______________________________");


//          Ejercicio 27
// Crea una función que compare strings sin tener en cuenta las 
// mayúsculas / minúsculas

let name1 = "manuel garcia.";
let name2 = "Manuel Garcia.";
let name3 = "Adolfo garcia.";

function comparaText(text1, text2) {
    if (text1.toLowerCase() === text2.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(name1, name2);
console.log(comparaText(name1,name2));

console.log(name1, name3);
console.log(comparaText(name1,name3));

console.log("_____________EJ_27_______________________________");


//          Ejercicio 28
// Crea una función que convierta en mayúscula sólo la primera letra
// de cada palabra de un string dado. El apartado 11 será de ayuda. 
// Investigar cómo unir un array de strings en un único string.

let frase28 = "En un lugar de la mancha";
console.log(frase28);

function firstMayus(frase) {
    let palabras = frase.split(" ");
    console.log(palabras);

    for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
    }
return palabras.join(" ");
}

console.log(firstMayus(frase28));

console.log("_____________EJ_28_______________________________");


//          Ejercicio 29
//  Crea una función en una única línea que reciba un valor lógico 
//  y devuelva el opuesto.

const logico = (verdad) => !verdad;

console.log(logico(false));
console.log(logico(true));

console.log("_____________EJ_29_______________________________");