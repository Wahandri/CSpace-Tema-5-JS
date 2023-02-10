
//--------------EJ 1---------------

let employees = [];
let index = 0;


// Crea numero aleatorio entre "min" y "max"
function salaryRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Constructor de Objetos: Empleados
function employee(position, performance, salary, hired){
    
    this.position = position; 
    this.performance = performance;
    this.salary = salary;
    this.hired = hired;
}

function hired(array) {
    if (array.performance < 0.3) {
        array.hired = false;
    } else {
        array.hired = true;
    }
};

// Crea 100 Empleados
for (i=0; i < 100; i++) {
    index++;
    employees[i] = new employee(`Empleado: ${index}`, Math.floor(Math.random()*100)/100, salaryRandom(1250,4000), true);
    if (employees[i].performance < 0.30) {
        employees[i].hired = false;
    }
};



//--------------EJ 2---------------

// Ordena los empleados segun su rendimiento
employees.sort((a,b) => a.performance - b.performance);



//--------------EJ 3---------------

// Ordena los empleados segun su salario
employees.sort((a,b) => a.salary - b.salary);



//--------------EJ 4---------------

// Ordena los empleados segun su posicion (selecciona los dos ultimos digitos, los transforma a numeros y los ordena)
employees.sort((a,b) => Number(a.position.substring(10)) - Number(b.position.substring(10)));
// Invertir orden
employees.reverse();



//--------------EJ 5---------------

// Filtramos los empleados con sueldos mayor a 2500.
// y imprimimos cargo y sueldo del empleado.
employees.filter(e => e.salary > 2500).forEach(e => console.log("El " + e.position + " tiene un salario de: " + e.salary));

console.clear();

//--------------EJ 6---------------

// employees = employees.map(employees => {

// })



//--------------EJ 7---------------

// Suma todos los salarios de todos los empleados
const sumaSalary = employees.reduce((acc, item) => {
    return acc = acc + item.salary; 
}, 0);
// mostramos el coste total en salarios y incluimos el gasto en impuestos
console.log("El coste en salarios es: " + sumaSalary + ". Mas " + (sumaSalary * 15 / 100) + " en impuestos");



//--------------EJ 8---------------

// • Despedir a los que tengan un rendimiento menor a 0.3
employees = employees.filter(employees => employees.performance > 0.3);
             
console.log(employees);
// • Calcular el sueldo medio de la empresa
const mediaSalary = sumaSalary / employees.length;
console.log("El sueldo medio la empresa es: " + mediaSalary);


// • Subir el sueldo de los que tengan un rendimiento superior a 0.7
employees.forEach(e => { if (e.performance > 0.7) {
    e.salary =  e.salary + e.salary * 10 / 100;
}});



//--------------EJ improvisado---------------

// Assciende a los 3 mejores empleados, 
// cambia su posicion a "BOSS"
// y multiplica sus sueldos por 3.

employees.sort((a,b) => a.performance - b.performance);
employees.reverse();


for (let i = 0; i < 3; i++) {
    employees[i].position = "BOSS";
    employees[i].salary = employees[i].salary + employees[i].salary * 3;
    
}

console.log(employees);
