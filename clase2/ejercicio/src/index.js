console.log("Sistema de control de facturacion");

import FacturaProceso from './services/FacturaProceso.js'

// cargar facturas de un archivo o base de datos o end point
// datos de prueba
const datos = [
    {codigo:10,total:1500,items:[1000,500]},
    {codigo:10,total:100,items:[1000,50]},
    {codigo:10,total:3500,items:[1000,50,2000]}
]
const facturaProceso = new FacturaProceso(datos);

// procesar facturas
console.log('Las facturas con diferencia son: ');

// ver resultados
console.log(facturaProceso.facturasConDiferencia());


