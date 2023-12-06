// let numeros = [5,5,98,6,9,7,6];

// console.log(numeros[4] )// --> 9

// numeros.length // --> cant del array

// numeros.push('soy un elemento nuevo')
// numeros.unshift("soy de afuera")
// numeros.shift()
// numeros.pop()



let notas = [5,4,10,3,9];



// forEach
// nos permite hacer algo con cada uno de los elementos del array
// recibe una funcion que tiene como parametro cada elemento del array

// notas.forEach(function (notaIndividual) {
//     console.log(notaIndividual)
// })


// MAP
// nos permite hacer algo con cada elemento del array 
// y nos retorna un array nuevo con el resultado

let resultado = notas.map(function (notaIndividual) {
    return notaIndividual*10;
})

// FILTER
// nos va a ayudar a filtrar los elementos del array
// retorna un array con los valores filtrados

let aprobados = notas.filter(function (notaIndividual) {
    return notaIndividual>=6;
})

console.log(aprobados)
console.log(notas)

// Reduce
// retorna un solo elemento 
// utiliza un acumulador para guardar el resultado

// sumando todas las notas
let suma = notas.reduce(function (resultado, notaIndividual) {
    return resultado+notaIndividual;
})

console.log(suma)