import FacturaProceso from '../../src/services/FacturaProceso.js'

test('Factura proceso, para un array vacio deberia devolver array vacio ', () => {
    const facturaProceso = new FacturaProceso([]);
    expect(facturaProceso.facturasConDiferencia()).toStrictEqual([]);
});


test('FacturaProceso sin items al calcular total deberia lanzar una excepcion', () => {
    try {
        const facturaProceso = new FacturaProceso();
        facturaProceso.facturasConDiferencia();
    } catch (e) {
        expect(e).toBe('Se produjo un error');  
    }
});
