import Pelicula from "../models/Pelicula.js";

class PeliculaProcesada {

    constructor(peliculas) {
        this.peliculas = peliculas;
    }

    cantidadPeliculas() {
        return this.peliculas.length;
    }

    cantidadPersonajes() {
        return this.peliculas.reduce( (sum,pel) => { 
            const p = new Pelicula(pel.nombre,pel.personajes);
            return sum + p.cantidadPersonajes();
        },0);
    }

}

export default PeliculaProcesada