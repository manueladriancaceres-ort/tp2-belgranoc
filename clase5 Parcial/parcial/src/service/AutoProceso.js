import Auto from '../model/Auto.js'

class AutoProceso {
    constructor(autos) {
        this.autos = autos;
    }

    cantidadMarcas() {
        return this.autos.length;
    }

    cantidadModelos() {
        return this.autos.reduce((cant,auto) => {
            const a = new Auto(auto.marca,auto.modelos,auto.origen)
            return cant + a.cantidadModelos();
        },0)
    }

    cantidadMarcasEEUU() {
        const aux = this.autos.filter(auto => auto.origen == "EEUU");
        return aux.length;
    }

}

export default AutoProceso