const listaNumeros = [34,23,45,-12,0,-100];

const numerosPositivos = listaNumeros.filter( numero => numero > 0 );
const numerosNegativos = listaNumeros.filter( numero => numero < 0 );

console.log(`Total pos ${numerosPositivos.reduce( (sum,numero) => sum + numero,0 )}` );
console.log("Total neg " + numerosNegativos.reduce( (sum,numero) => sum + numero,0 ));

// const listaNumerosMas300 = listaNumeros.map(numero => { return numero+300 } );
const listaNumerosMas300 = listaNumeros.map(numero => ( numero+300 ) );
console.log(listaNumerosMas300);
/*
var numNegativos = 0;
var numPositivos = 0;

listaNumeros.forEach(element => {
    if(element < 0){
        numNegativos += element;
    } else{
        numPositivos += element;
    }
});

console.log(numPositivos);
console.log(numNegativos);
*/