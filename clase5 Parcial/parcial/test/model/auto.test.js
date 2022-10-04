
import Auto from '../../src/model/Auto.js'

test('Con array vacio modelos, cantidad de modelos, deberia devolver 0 ', () => {
    const auto = new Auto("",[],"");
    expect(auto.cantidadModelos()).toBe(0);
});

test('Con array 3 modelos, cantidad de modelos, deberia devolver 3 ', () => {
    const auto = new Auto("",["","",""],"");
    expect(auto.cantidadModelos()).toBe(3);
});
