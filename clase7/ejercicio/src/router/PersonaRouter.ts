import express from 'express'
import PersonaController from '../controller/PersonaController.js'

class PersonaRouter {

    app: express.Application;
    direccion: string;
    constructor(app: express.Application,direccion: string) {
        this.app = app;
        this.direccion = direccion;
        this.configurar();
    }

    configurar() {
        this.app.route(this.direccion)
            .get( PersonaController.findAll )
            .post( PersonaController.add )
        this.app.route(this.direccion + "/:id")
            .get( PersonaController.get )

    }

}

export default PersonaRouter