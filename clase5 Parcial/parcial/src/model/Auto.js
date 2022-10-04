class Auto {
    constructor(marca,modelos,origen) {
        this.marca = marca;
        this.modelos = modelos;
        this.origen = origen;
    }

    cantidadModelos() {
        return this.modelos.length;
    }
}

export default Auto