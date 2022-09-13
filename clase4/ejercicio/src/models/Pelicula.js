class Pelicula {
    constructor(nombre,personajes) {
        this.nombre = nombre;
        this.personajes = personajes;
    }

    cantidadPersonajes() {
        return this.personajes.length;
    }

}

export default Pelicula