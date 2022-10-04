import ProcesarPeliculas from '../../src/services/ProcesarPeliculas.js'

test('Con array vacio, cantidad de peliculas, deberia devolver 0 ', () => {
    const procesarPeliculas = new ProcesarPeliculas([]);
    expect(procesarPeliculas.cantidadPeliculas()).toBe(0);
});
  
test('Con 2 peliculas, cantidad de peliculas, deberia devolver 2 ', () => {
    const procesarPeliculas = new ProcesarPeliculas([{nombre:"Breaking bad",personajes:[]},{nombre:"Dark",personajes:[]}]);
    expect(procesarPeliculas.cantidadPeliculas()).toBe(2);
});

test('Con 0 personajes, cantidad de personajes, deberia devolver 0 ', () => {
    const procesarPeliculas = new ProcesarPeliculas([{nombre:"Breaking bad",personajes:[]},{nombre:"Dark",personajes:[]}]);
    expect(procesarPeliculas.cantidadPesonajes()).toBe(0);
});

test('Con 3 personajes, cantidad de personajes, deberia devolver 3 ', () => {
    const procesarPeliculas = new ProcesarPeliculas([{nombre:"Breaking bad",personajes:["nom1"]},{nombre:"Dark",personajes:["nom2","nom3"]}]);
    expect(procesarPeliculas.cantidadPesonajes()).toBe(3);
});
