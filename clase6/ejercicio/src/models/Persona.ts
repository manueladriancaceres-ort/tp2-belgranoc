class Persona {
    private dni: number;
    private nombre: String;
    constructor(dni: number,nombre: String) {
        this.dni = dni;
        this.nombre = nombre;
    }
    public getDni(): number {
        return this.dni
    }
    public getNombre(): String {
        return this.nombre;
    }
}
export default Persona;