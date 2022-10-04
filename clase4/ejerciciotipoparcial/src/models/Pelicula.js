class Pelicula {
    constructor(nombre,personajes){
        this.nombre = nombre;
        this.personajes = personajes;
    }
    cantidadPersonajes() {
        return this.personajes.reduce((cantidad,personaje) => cantidad+1,0);
    }
}

export default Pelicula