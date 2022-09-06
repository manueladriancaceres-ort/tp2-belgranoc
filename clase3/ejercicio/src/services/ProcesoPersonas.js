class ProcesoPersonas {
    constructor(personas) {
        this.personas = personas;
    }
    cantidadPersonas() {
        // personasObj.reduce((sum,personaje) => sum+1,0);
        return this.personas.length
    }
    cantidadPorCodigoPostal(codigopostal) {
        return this.personas.filter(persona=>persona.codigopostal===codigopostal).length
    }
}
export default ProcesoPersonas