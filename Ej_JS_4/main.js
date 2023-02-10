//  Ejercicio 4


// Selectores
const table = document.getElementById("table");

const titleInput = document.getElementById("titleInput");
const autorInput = document.getElementById("autorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const buttonInput = document.getElementById("buttonInput");



// objeto Book
function Book(title, autor, sales, price) {
    this.id = Math.floor(Math.random()*10000);
    this.title = title;
    this.autor = autor;
    this.sales = sales;
    this.price = price;
};

//  Libreria
let library = [
    new Book("La Granja Humana", "George Orwell", 3000000, 35),
    new Book("Si te acuestas, no lo lees", "Paco Pacheco", 500000, 6.70),
    new Book("La Imprudende Rana", "Aitor Menta", 700000, 8.9),
    new Book("El nido del cuco", "Pedro Sanchez", 3000, 1.2),
    new Book("1984", "George Orwell", 20000000, 37.4),
    new Book("Pingüinos Asesinos: La era glacial", "Pingusto Anonimus", 800000, 11.56),
    new Book("Muerte al Tucan", "Ernesgildo Florido", 30000, 4.50),
    new Book("La Espada que no pinchaba", "Helmer Luzo", 500000, 10),
    new Book("El Niño Anciano", "Omar Omero", 400000, 18.90),
    new Book("La Guadaña con la que me Afeite", "Sincara Normal", 200000, 10),
    
];

let contBook = library.length;

// Crear Libro ///////// REFACTORIZAR!!!!!!
function createBook(book) {
    let newColumna = document.createElement("tr");
    table.appendChild(newColumna);

    let newid = document.createElement("th");
    newColumna.appendChild(newid).textContent = book.id;
    let newTitle = document.createElement("th");
    newColumna.appendChild(newTitle).textContent = book.title;
    let newAutor = document.createElement("th");
    newColumna.appendChild(newAutor).textContent = book.autor;
    let newSales = document.createElement("th");
    newColumna.appendChild(newSales).textContent = book.sales;
    let newPrice = document.createElement("th");
    newColumna.appendChild(newPrice).textContent = book.price + "€";
    let newButton = document.createElement("th");
    newColumna.appendChild(newButton);
    newButton.innerHTML = `<button id="${newid.textContent}" type='button' class='deleteButton btn btn-warning'>Delete</button>`;
    contBook++;
};

// Funcion refresca la lista de libros
function updateList() {
    table.innerHTML = "";
    for (let i=0; i<library.length; i++) {
        createBook(library[i]);
        
    }

};

// Button Delete*)
table.onclick = e => {
    // Confirmacion de Borrado
    let opcion = confirm("Estas borrando un libro de le lista. ¿Quieres continuar?");
    if (opcion == true) {
        if(e.target.tagName === "BUTTON") {
            library = library.filter(book => book.id != e.target.id);
            updateList();           
        }
	} 
};

// Crear libro con Inputs
buttonInput.addEventListener("click", () => {
    table.innerHTML = "";
    library.push(new Book(library.length+1,titleInput.value,autorInput.value,salesInput.value,priceInput.value));
    updateList();
    titleInput.value = "";
    autorInput.value = "";
    salesInput.value = "";
    priceInput.value = "";
});



// Actualizar lista
updateList();

// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------


// Ejercicio 5


// Selectores Ej5
// const filterInput = document.getElementById("filterInput");


 
// Buscador 

// function filterLibrary (e) {
// filterInput.oninput = e => { 
//     if(e.target.title.indexOf(filterInput.value >= 0)) {
//         library = library.filter(book = book);
//         updateList();           
//     }
// };   



// Boton ordenar por precio

// const buttonPrice = document.getElementById("buttonPrice");

// buttonPrice.addEventListener("click", () => {
//     library = library.sort((a,b) => a.price-b.price);
//     updateList();
    
// })
    




