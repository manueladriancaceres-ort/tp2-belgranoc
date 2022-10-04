class PersonaDaoMemoria {
    constructor() {
        this.personas = [];
    }
    // conexio a mongodb
    add(element) {
        this.personas.push(element);
        return Promise.resolve(true);
    }
    findAll() {
        return Promise.resolve(this.personas);
    }
    get(clave) {
        return Promise.resolve(this.personas
            .filter(p => p.getDni() == clave)[0]);
    }
    delete(clave) {
        this.personas = this.personas.filter(p => p.getDni() != clave);
        return Promise.resolve(true);
    }
}
export default PersonaDaoMemoria;
