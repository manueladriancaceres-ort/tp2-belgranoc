import Pelicula from '../models/Pelicula.js';

class ProcesarPeliculas {
    constructor(peliculas) {
        this.peliculas = peliculas;
    }
    cantidadPeliculas() {
        return this.peliculas.reduce((contar,pelicula) => contar+1,0);
    }
    cantidadPesonajes() {
        return this.peliculas.reduce((contar,pelicula) => {
            const peli = new Pelicula(pelicula.nombre,pelicula.personajes);
            return peli.cantidadPersonajes() + contar;
        },0);
    }
}

export default ProcesarPeliculas