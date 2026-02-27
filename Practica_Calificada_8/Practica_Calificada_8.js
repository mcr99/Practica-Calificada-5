// Ejercicio 1 — Tarjetas de Usuarios


let user1 = {
    name: "Juan",
    age: "30",
    country: "Guatemala",
    email: "juan@juan.com",
    phone: "58265826"
}
let user2 = {
    name: "Pedro",
    age: "40",
    country: "El Salvador",
    email: "pedro@pedro.com",
    phone: "64561654"
}


function createCard(user) {
    let {name, age, country, ...rest} = user

    let missing = Object.entries(rest)
    .map(([key, value]) => `${key}: ${value}`)
    .join("<br>")

    let userCards = document.querySelector("#user_box")
    userCards.innerHTML += `
    <div class="user_cards">
        <p>name: ${name}</p>
        <p>age: ${age}</p>
        <p>country: ${country}</p>
        <p>${missing}</p>
    <div>
    `
}

createCard(user1)
createCard(user2)


// Ejercicio 2 — Tabla de Productos

let products =  [
    {
        name: "milk",
        price: "$10",
        stock: 10,
        brand: "nido",
        weight: "2kg"
    },
    {
        name: "eggs",
        price: "$15",
        stock: 50,
        brand: "farm",
        weight: "1kg"
    }
]

function renderProduct(array){
    array.forEach(product => {
    let {name, price, stock, ...rest} = product

    let missing = Object.entries(rest)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ")

    let productsTable = document.querySelector("#table_box")
    productsTable.innerHTML += `
    <tr class="products_table">
        <td>${name}</td>
        <td>${price}</td>
        <td>${stock}</td>
        <td>${missing}</td>
    </tr>
    `
    });
}

renderProduct(products)


//Ejercicio 3 — Lista de Tareas

let toDoList = {
    title: "activity 1",
    description: "description 1",
    priority: "Low",
    notes: "activity notes"
}

let toDoListCopy = []

function addTask(list) {
    let {title, description, ...rest} = list

    toDoListCopy = [...toDoListCopy, list]

    let missing = Object.entries(rest)
    .map(([key, value]) => `${key}: ${value}`)
    .join(`
`)

    let tasksList = document.querySelector("#task_list")
    tasksList.innerHTML = `
    <li>
        ${title}: ${description} <span class="see_More"> See more </span>
    </li>
    `
    let seeMore = tasksList.querySelector(".see_More")

    seeMore.addEventListener("click", () => {
        console.log(`${missing}`)
    })
}

addTask(toDoList)

// Ejercicio 4 — Tabla de Estudiantes

let showStudentsList = [
    {
        name: "Juan",
        age: 15,
        notes: [90, 30, 40, 50] ,
    },
    {
        name: "Jose",
        age: 15,
        notes: [50, 80, 75, 60] ,
    },
        {
        name: "Carlos",
        age: 15,
        notes: [100, 30, 65, 80] ,
    }
]


let showStudentsListCopy = []

function showStudents(students){
    showStudentsListCopy = [...showStudentsListCopy, ...students]

    showStudentsListCopy.forEach(student => {
        let {name, age, notes} = student
        let average = notes.reduce((a,b) => a+b, 0) / notes.length
        let tableRow = document.querySelector("#students_tbody")
        tableRow.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${age}</td>
            <td>${notes.join(", ")}</td>
            <td>${average.toFixed(2)}</td>
        </tr>
        `
    })
}

showStudents(showStudentsList)


// Ejercicio 5 — Configuración de App

let app = {
    title: "App title",
    version: "App version 1.0",
    author: "Author Name",
    language: "English",
}


function configureApp (application){
    let {title, version, ...rest} = application

    let missing = Object.entries(rest)
    .map(([key, value]) => `${key}: ${value}`)
    .join(` / `)

    let appBox = document.querySelector("#app_box")

    appBox.innerHTML = `
    <p>${title}</p>
    <p>${version}</p>
    <p>${missing}</p>
    <button class="change"> Change </button>
    `
    let changeButton = document.querySelector(".change")

    changeButton.addEventListener("click", () => {
        let newA = {...application, version: "App version 2.0"}
        configureApp(newA)
    })
}

configureApp(app)