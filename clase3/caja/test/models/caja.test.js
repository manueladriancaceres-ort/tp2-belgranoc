import Caja from "../../src/models/caja.js"

test('para lista valores 0, deberia retornar 0 ', () => {
    const caja = new Caja(1, 100, [], []);
    expect(caja.calcularValor()).toBe(0);
});


test('para lista valores 5,3,2, deberia retornar 5320 ', () => {
    const caja = new Caja(1, 100, [5,3,2], []);
    expect(caja.calcularValor()).toBe(5320);
});

test('para lista comprobantes en 0, deberia retornar 0 ', () => {
    const caja = new Caja(1, 100, [], []);
    expect(caja.obtenerImporte()).toBe(0);
});

test('para lista comprobantes en 0, deberia retornar 0 ', () => {
    const caja = new Caja(1, 100, [], [{"id":1,"tipo":"I","importe":7320}, {"id":2,"tipo":"E","importe":2000} ]);
    expect(caja.obtenerImporte()).toBe(5320);
});


test('valores 5320 y comprobantes 5320, debe retornar que no hay diferencia (false)', () => {
    const caja = new Caja(1, 100, [5,3,2], [{"id":1,"tipo":"I","importe":7320}, {"id":2,"tipo":"E","importe":2000} ]);
    expect(caja.hayDiferencia()).toBe(false);
});


test('debe retornar que hay diferencia (true)', () => {
    const caja = new Caja(1, 100, [6,3,2], [{"id":1,"tipo":"I","importe":7320}, {"id":2,"tipo":"E","importe":2000} ]);
    expect(caja.hayDiferencia()).toBe(true);
});
