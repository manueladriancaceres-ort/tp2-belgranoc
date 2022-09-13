import Pelicula from "../../src/models/Pelicula.js"


test('Para una pelicula sin personajes, deberia devolver 0', () => {
    const pelicula = new Pelicula("Pel1",[]);
    expect(pelicula.cantidadPersonajes()).toBe(0);
});

test('Para una pelicula con 3 personajes, deberia devolver 3', () => {
    const pelicula = new Pelicula("Pel1",["Per1","Per2","Per3"]);
    expect(pelicula.cantidadPersonajes()).toBe(3);
});
