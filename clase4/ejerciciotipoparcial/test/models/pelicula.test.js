import Pelicula from '../../src/models/Pelicula.js'

test('Pelicula con array vacio de personajes, cantidad de personajes deberia devolver 0 ', () => {
    const pelicula = new Pelicula("Dark",[]);
    expect(pelicula.cantidadPersonajes()).toBe(0);
});
  
test('Pelicula con 3 personajes, cantidad de personajes deberia devolver 3 ', () => {
    const pelicula = new Pelicula("Dark",["personaje1","personaje2","personaje3"]);
    expect(pelicula.cantidadPersonajes()).toBe(3);
});
