import Persona from "../models/Persona.js";
import PersonaDaoMongoDb from "../repository/PersonaDaoMongoDb.js";
class PersonaService {
    constructor() {
        this.personaDaoMongoDb = new PersonaDaoMongoDb();
    }
    async findAll() {
        return await this.personaDaoMongoDb.findAll();
    }
    async add(personaDto) {
        // mapper de personaDto a Persona
        return await this.personaDaoMongoDb.add(new Persona(personaDto.dni, personaDto.nombre));
    }
    async get(clave) {
        try {
            return await this.personaDaoMongoDb.get(Number(clave));
        }
        catch (e) {
            throw e;
        }
    }
    // tratar de usar bajas logicas
    async delete(clave) {
        return await this.personaDaoMongoDb.delete(Number(clave));
    }
}
export default PersonaService;
