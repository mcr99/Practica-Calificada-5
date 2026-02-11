// ######################################################
// Ejercicio 1 – Calculadora de Promedio y Rendimiento


/*
let number = 0
let total = 0

for (let i = 0; i < 4; i++) {
    number = parseInt(prompt(`Ingresa tu Nota: `))
    total = total + number
}

let average = total / 4

if (average >= 90) {
    alert(`Exelente!`)
} else if (average >= 75) {
    alert(`Bueno!`)
} else if  (average >= 60) {
    alert(`Regular`)
}else {
    alert(`Insuficiente`)
}
*/


// ######################################################
// Ejercicio 2 – Calculadora de Tarifa de Transporte


/*
let age = parseInt(prompt(`Ingresa tu Edad: `))
let student = prompt(`Eres Estudiante? (Si o No)`)
let distance = parseFloat(prompt(`Ingresa Distancia que recorreras en Kilometros: `))
let price = 10


if (distance > 30 ){ // 10% mas
    if (age < 18){
        alert(`Total a Pagar: 6`)
    } else if (age > 60){
        alert(`Total a Pagar: 5`)
    } else {
        if (student.toLowerCase() === "si") {
            alert(`Total a Pagar: 8.50`)
        }else{
        alert(`Total a Pagar: 11`)
    }
    } 
} else {
    if (age < 18){
        alert(`Total a Pagar: 5`)
    } else if (age > 60) {
        alert (`Total a Pagar: 4`)
    } else {
        if (student.toLowerCase() === "si") {
            alert(`Total a Pagar: 7.50`)
        } else {
            alert(`Total a Pagar: 10`)
        }
    }
}
*/


// ######################################################
// Ejercicio 3 – Menú de Conversión de Unidades


/*
let conversion = parseInt(prompt(`
    Escribe 1 para: Convertir de Celsius a Fahrenheit
    Escribe 2 para: Convertir de Fahrenheit a Celsius
    Escribe 3 para: Convertir de Metros a Kilómetros
    Escribe 4 para: Convertir de Kilómetros a Metros
    `))

let unit = parseFloat(prompt(`Ingresa el valor a convertir: `))

switch (conversion) {
    case 1: 
        alert (`La conversion de ${unit} grados Celsius es: ${(unit* 9/5)+32} grados Fahrenheit`)
        break;
    case 2: 
        alert(`La conversion de ${unit} grados Fahrenheit es: ${(unit - 32)* 5/9} grados Celsius`)
        break;
    case 3: 
        alert(`La conversion de ${unit} Metros es: ${unit/1000} Kilometros`)
        break;
    case 4:
        alert(`La conversion de ${unit} Kilometros es: ${unit*1000} Metros`)
        break;
    default: 
    alert(`Opcion Incorrecta`)
}
*/


// ######################################################
//Ejercicio 4 – Sistema de Descuentos en una Tienda


/*
let total = parseFloat(prompt(`Ingresa el total de tu compra: `))
let card = prompt(`Tienes Tarjeta de Cliente Frecuente? (Si o No)`)

if (card.toLowerCase() === `si`){
    if (total > 500) {
        alert(`
            Descuento aplicado : 15%
            Total a pagar: ${total - (total*0.15)}
            `)
    } else if (total <= 100) {
        alert(`
            Descuento aplicado : 0%
            Total a pagar: ${total}
            `)
    } else {
        alert(`
            Descuento aplicado : 5%
            Total a pagar: ${total - (total*0.05)}
            `)
    }
} else if (card.toLowerCase() === `no`) {
        if (total > 500) {
        alert(`
            Descuento aplicado : 10%
            Total a pagar: ${total - (total*0.10)}
            `)
    } else if (total <= 100) {
        alert(`
            Recargo aplicado de: 5%
            Total a pagar: ${total + (total*0.05)}
            `)
    } else {
        alert(`
            Descuento aplicado : 0%
            Total a pagar: ${total}
            `)
    }
} else alert(`Opcion Incorrecta`)

*/


// ######################################################
// Ejercicio 5 – Calculadora de Edad y Etapa de Vida


/*
let yearOfBirth = parseInt(prompt(`Ingresa tu año de nacimiento: `))
let currentYear = parseInt(prompt(`Ingresa el año actual: `))
let birthday = prompt(`Ya compliste años en ${currentYear}? (Si o No)`)
let age = 0

if (birthday.toLowerCase() === `si`) {
    age = currentYear - yearOfBirth
    if (age < 18) {
        alert(`Menor de Edad, Tu edad es: ${age}`)
    } else if (age <= 30) {
        alert(`Adulto Joven, Tu edad es: ${age}`)
    } else if (age <= 59) {
        alert(`Adulto, Tu edad es: ${age}`)
    } else alert(`Adulto Mayor, Tu edad es: ${age}`)
} else {
    age = currentYear - yearOfBirth -1
    if (age < 18) {
        alert(`Menor de Edad, Tu edad es: ${age}`)
    } else if (age <= 30) {
        alert(`Adulto Joven, Tu edad es: ${age}`)
    } else if (age <= 59) {
        alert(`Adulto, Tu edad es: ${age}`)
    } else alert(`Adulto Mayor, Tu edad es: ${age}`)
}
*/
