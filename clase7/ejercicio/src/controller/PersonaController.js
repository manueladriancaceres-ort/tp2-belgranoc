import PersonaService from '../services/PersonaService.js';
class PersonaController {
    // llama a un service
    static async findAll(req, res) {
        const personaService = new PersonaService();
        res.send(await personaService.findAll());
    }
    static async add(req, res) {
        const personaService = new PersonaService();
        if (await personaService.add(req.body)) {
            res.send("Alta ok");
        }
        else {
            res.status(404);
        }
    }
    static async get(req, res) {
        const personaService = new PersonaService();
        try {
            const persona = await personaService.get(req.params.id);
            res.send(persona);
        }
        catch (e) {
            res.status(404);
        }
    }
    static async delete(req, res) {
        const personaService = new PersonaService();
        if (await personaService.delete(req.params.id)) {
            res.send("Baja ok");
        }
        else {
            res.status(404);
        }
    }
}
export default PersonaController;
