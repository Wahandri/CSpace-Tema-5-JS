// Create Constructor

function User(name, lastName, email, age, country, numberItem) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.country = country;
    this.numberItem = numberItem;
    this.newItem = function(){this.numberItem++;};
    this.deleteItems = function(){this.numberItem = 0;};
};



// Data

const users = [
    new User("Manuel", "Garcia", "wahandri@mail.com", 29, "Malaga", 0),
    new User("Marina", "Garcia", "marinaReina@mail.com", 24, "Albacete", 0),
    new User("Pablo", "Alcantara", "pedrinBajin@gmail.com", 48, "Valencia", 0),
];



// Selectors

const select = document.getElementById("selectUser");
const list = document.getElementById("userInfo");
const btnPush = document.getElementById("btnPush");
const btmDelete = document.getElementById("btnDelete");




// Create Option

users.forEach((e) => {
    const newOption = document.createElement("option");
    newOption.textContent = e.name;
    select.appendChild(newOption);
});



// Create Listener



function addlist(newOption) {
    list.innerHTML = "";

    for (const key in newOption) {

        const value = newOption[key];
        
    
        if (typeof value !== "function") {
            const newList = document.createElement("li");
            newList.innerHTML = `<b>${key}:</b> ${value}`;
            newList.classList.add("list-group-item");
            list.appendChild(newList);
        }
    }
}

// Funcion botones

function checkItem(e) {
    const selectedUser = users.find(newOption => newOption.name === select.value);
    if (e.target === btnPush) {
        selectedUser.newItem();
    } else {
        selectedUser.deleteItems();
    }
    addlist(selectedUser);
}



select.addEventListener("change", (e) => {
    const selectedUser = users.find(newOption => newOption.name === select.value);
    addlist(selectedUser);
});



// Buttons

btnPush.addEventListener("click", checkItem);
btnDelete.addEventListener("click", checkItem);