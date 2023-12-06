// invertirCaso(string)
// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.
// "hoi".toLowerCase()--> convertir todo a minuscula
// 'ff'.toUpperCase()--> convertir todo a mayuscula

function invertirCaso(texto) {
    // para ir juntando las letras resultantes
    let resultado = '';
    // primero agarrar letra por letra
    for (let i = 0; i < texto.length; i++) {
        // ver si esta en mayus, pasar a minus
        if (texto[i] === texto[i].toUpperCase()) {
            resultado += texto[i].toLowerCase();
            // si esta en minus, pasar a mayus
        } else {
            resultado += texto[i].toUpperCase();
        }
    }
    // retornar el resultado
    return resultado
}

console.log(invertirCaso2('Ada Lovelace')) // 'aDA lOVELACE'
console.log(invertirCaso2('feliz cumple')) // 'FELIZ CUMPLE'
console.log(invertirCaso2('jAvAsCrIpT')) // 'JaVaScRiPt'


// No anda :(
// function invertirCaso2(texto) {
//     return texto.reduce((resultado,letra)=>{
//         // ver si esta en mayus, pasar a minus
//         if (letra === letra.toUpperCase()) {
//             // resultado += texto[i].toLowerCase();
//             return resultado+letra.toLowerCase()
//             // si esta en minus, pasar a mayus
//         } else {
//             // resultado += texto[i].toUpperCase();
//             return resultado+letra.toUpperCase();
//         }
//     })     
// }