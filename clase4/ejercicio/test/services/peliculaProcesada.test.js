import PeliculaProcesada from "../../src/services/PeliculaProcesada.js"

test('Para una lista de peliculas vacia cantidad peliculas, deberia devolver 0', () => {
    const peliculaProcesada = new PeliculaProcesada([]);
    expect(peliculaProcesada.cantidadPeliculas()).toBe(0);
});

test('Para una lista de peliculas vacia cantidad personajes, deberia devolver 0', () => {
    const peliculaProcesada = new PeliculaProcesada([]);
    expect(peliculaProcesada.cantidadPersonajes()).toBe(0);
});

test('Para una lista de peliculas con 3 personajes, deberia devolver 3', () => {
    const peliculaProcesada = new PeliculaProcesada([
        {nombre: "pel1",personajes:["per1"]},
        {nombre: "pel2",personajes:["per1","per2"]}
    ]);
    expect(peliculaProcesada.cantidadPersonajes()).toBe(3);
});
