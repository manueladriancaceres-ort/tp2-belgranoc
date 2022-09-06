// require es codigo legacy
/*
import {objetoFactura} from '../src/models/objetoFactura.js'
console.log(objetoFactura.calcular());
*/

import Factura from '../../src/models/Factura.js'

test('Para un array con items [1000,500] deberia devolver la suma 1500', () => {
    const factura = new Factura(1,1500,[1000,500]);
    expect(factura.calcularTotalFactura()).toBe(1500);
});


test('Para un array vacio al calcular total deberia devolver 0', () => {
    const factura = new Factura(1,1500,[]);
    expect(factura.calcularTotalFactura()).toBe(0);
});

test('Factura sin items al calcular total deberia lanzar una excepcion', () => {
    try {
        const factura = new Factura();
        factura.calcularTotalFactura();
    } catch (e) {
        expect(e).toBe('Se produjo un error');  
    }
});

test('Factura sin items al calcular diferencia deberia lanzar una excepcion', () => {
    try {
        const factura = new Factura();
        factura.facturaConDiferencia();
    } catch (e) {
        expect(e).toBe('Se produjo un error');  
    }
});

test('Factura con diferencia entre items y total deberia devolver true', () => {
    const factura = new Factura(1,1500,[500]);
    expect(factura.facturaConDiferencia()).toBe(true);
});

test('Factura sin diferencia entre items y total deberia devolver false', () => {
    const factura = new Factura(1,1500,[500,1000]);
    expect(factura.facturaConDiferencia()).toBe(false);
});
