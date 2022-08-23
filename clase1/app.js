console.log("Hola mundo");

var miVariable = 'texto';
console.log(miVariable);
// Problema declarando las variables con var es que se pueden "redeclarar"
var miVariable = 300;
console.log(miVariable);

// Para evitar este problema se recomienda usar let

let unaVariable = 'texto';
unaVariable = 300;  // tener en cuenta este tema tambien

console.log(unaVariable);

const MI_VAR_CONST = 'alog';
// MI_VAR_CONST = 1000;   // esto da error

// List<String> lista = new ArrayList();  // en java es solo de un tipo de dato

// en javascript o php (ver) se pueden cargar elementos de distinto tipo
let lista = [34,23,45,-12,0,-100,true,'algo'];
console.log(lista);

lista = 4;
console.log(lista);

// Para manter el tipo de dato de un objeto se puede usar const
const listaNumeros = [34,23,45,-12,0,-100];
// listaNumeros = 1000;  esto da error

//
// listaNumeros y otraLista "apuntan" al mismo objeto en memoria
//  
const otraLista = listaNumeros;
otraLista[0] = 5000;

console.log(listaNumeros);
console.log(otraLista);

const listaClonStarWars = [...listaNumeros];
listaClonStarWars[0] = 'Soldado five';

console.log(listaClonStarWars);

//
//  Ejercicio
//  sumar positivos y negativos, en distintas variables
//  const listaNumeros = [34,23,45,-12,0,-100];
//

// suma todo, porque no estuvo clara la consigna
// programacion imperativa
let total = 0;
for (let i = 0; i < listaNumeros.length; i++) {
    total += listaNumeros[i];
}
console.log(total);

// 




