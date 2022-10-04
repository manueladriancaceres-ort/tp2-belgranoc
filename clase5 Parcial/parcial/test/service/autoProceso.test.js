import AutoProceso from '../../src/service/AutoProceso'

test('Con array vacio, cantidad de autos, deberia devolver 0 ', () => {
    const procesarAutos = new AutoProceso([]);
    expect(procesarAutos.cantidadMarcas()).toBe(0);
});

test('Con array 3 elementos, cantidad de marcas, deberia devolver 3 ', () => {
    const procesarAutos = new AutoProceso([{},{},{}]);
    expect(procesarAutos.cantidadMarcas()).toBe(3);
});

test('Con array 3 elementos, cantidad de marcas, deberia devolver 3 ', () => {
    const procesarAutos = new AutoProceso([ {marca:"",modelos:["",""],origen:""}, {marca:"",modelos:[""],origen:""} ]);
    expect(procesarAutos.cantidadModelos()).toBe(3);
});

test('con 2 elementos, 1 de EEUU, deveria devolver 1 ', () => {
    const procesarAutos = new AutoProceso([ {marca:"",modelos:["",""],origen:"EEUU"}, {marca:"",modelos:[""],origen:""} ]);
    expect(procesarAutos.cantidadMarcasEEUU()).toBe(1);
});
