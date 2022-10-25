import express from 'express'
import Persona from '../models/Persona.js';
import PersonaService from '../services/PersonaService.js'

class PersonaController {

    // llama a un service
    static async findAll(req:express.Request,res:express.Response) {
        const personaService : PersonaService = new PersonaService();
        res.send(await personaService.findAll()) ;
    }

    static async add(req:express.Request,res:express.Response) {
        const personaService : PersonaService = new PersonaService();
        if (await personaService.add(req.body)) {
            res.send("Alta ok");
        } else {
            res.status(404);
        }
    }

    static async get(req:express.Request,res:express.Response) {
        const personaService : PersonaService = new PersonaService();
        try {
            const persona: Persona = await personaService.get(req.params.id);
            res.send(persona);
        } catch(e) {
            res.status(404);
        }
    }    

    static async delete(req:express.Request,res:express.Response) {
        const personaService : PersonaService = new PersonaService();
        if(await personaService.delete(req.params.id)) {
            res.send("Baja ok")
        } else {
            res.status(404);
        }
    }    

}

export default PersonaController