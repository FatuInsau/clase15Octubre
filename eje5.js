// filtrarPorLongitudMayorA(longitud, palabras)
// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:

function filtrarPorLongitudMayorA (longitud, palabras) {
    return palabras.filter((cadaPalabra)=>{
        return cadaPalabra.length>longitud;
    })
}


console.log(filtrarPorLongitudMayorA(6, [
  'dia',
  'remolacha',
  'azul',
  'sorpresa',
  'te',
  'verde',
  'hola',
  'libros'
])) // ['remolacha', 'sorpresa', 'verde']