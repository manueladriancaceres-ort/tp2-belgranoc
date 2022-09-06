import ProcesoPersonas from '../../src/services/ProcesoPersonas.js'

// Caso de prueba1
// lista vacia devuelve cantidad 0
test('lista vacia de personas deberia devolver cantidad 0', () => {
    // simular una lista vacia de registros de personas
    const personas = [];
    const procesoPersonas = new ProcesoPersonas(personas);
    expect(procesoPersonas.cantidadPersonas()).toBe(0);
});

// Caso de prueba 2
// con 3 registros de personas
// deveria devolver 3