import Persona from "../models/Persona.js";
import PersonaDaoMongoDb from "../repository/PersonaDaoMongoDb.js";


class PersonaService {
    personaDaoMongoDb : PersonaDaoMongoDb = new PersonaDaoMongoDb();
    async findAll() {
        return await this.personaDaoMongoDb.findAll();
    }

    async add(personaDto : any) {
        // mapper de personaDto a Persona
        return await this.personaDaoMongoDb.add(new Persona(personaDto.dni,personaDto.nombre));
    }

    async get(clave : any) {
        try {
            return await this.personaDaoMongoDb.get(Number(clave));
        } catch(e) {
            throw e
        }
    }

    // tratar de usar bajas logicas
    async delete(clave: any) {
        return await this.personaDaoMongoDb.delete(Number(clave));
    }


}

export default PersonaService