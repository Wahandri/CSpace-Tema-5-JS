
// -------------------- EJERCICIO--------------------------

// Constantes
const post = "https://jsonplaceholder.typicode.com/comments";
const PAGE_SIZE = 20;
let selectedPage = 1;

// Selectores
const tbody = document.getElementById("tbody");
const numPag = document.getElementById("numPag");

// Event button pasar pagina
document.querySelectorAll(".backPage").forEach(button => button.addEventListener("click", () => {
    createList(post);
    selectedPage = selectedPage - 1
    
}));
document.querySelectorAll(".nexPage").forEach(button => button.addEventListener("click", () => {
    createList(post);
    selectedPage = selectedPage + 1
    
}));


// Hacemos un JSON de la API
async function createList(URL) {
    const response = await fetch(URL);
    let array = await response.json();
    let maxPages = array.length / PAGE_SIZE;

    if (selectedPage <= maxPages && selectedPage >= 1) {

        tbody.innerHTML = "";
        array = paginate(array, PAGE_SIZE, selectedPage);
        // creamos una lista con los IDs y Nombres
        array.forEach(post => {
            tbody.innerHTML += `
            <tr>
                <th>${post.id}</th>
                <th class="th">${post.name}</th>
            </tr>
            `
        });
        
        numPag.textContent = `Pag: ${selectedPage} de ${maxPages}`;
    } else {
        selectedPage = 1;
        createList(URL)
    }
};


function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}


createList(post);