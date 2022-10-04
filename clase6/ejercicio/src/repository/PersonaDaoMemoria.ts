import Persona from "../models/Persona";
import Dao from "./Dao";

class PersonaDaoMemoria implements Dao<Persona,Number> {
    private personas: Array<Persona> = [];
    // conexio a mongodb

    add (element: Persona) : Promise<Boolean> {
        this.personas.push(element);
        return Promise.resolve(true);
    }
    findAll () : Promise<Persona[]> {
        return Promise.resolve(this.personas);
    }
    get (clave: Number) : Promise<Persona> {
        return Promise.resolve(this.personas
            .filter( p => p.getDni() == clave )[0]);
    }
    delete (clave: Number) : Promise<Boolean> {
        this.personas = this.personas.filter(
            p => p.getDni() != clave )
        return Promise.resolve(true);
    }
    
}
export default PersonaDaoMemoria