import Persona from "../models/Persona.js";
import Dao from "./Dao";
import ConectarMongoDb from '../repository/ConectarMongoDb.js'

class PersonaDaoMongoDb implements Dao<Persona,Number> {
    private conectarMongoDb : ConectarMongoDb = new ConectarMongoDb();

    async add (element: Persona) : Promise<Boolean> {
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('personas');
        await collection.insertOne(element);
        await this.conectarMongoDb.desconectar();
        return Promise.resolve(true);
    }
    async findAll () : Promise<Persona[]> {
        const personas: Array<Persona> = [];
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('personas');
        const findResult = await collection.find({}).toArray();
        // mapper
        findResult.forEach( e => personas.push( 
            new Persona(e.dni,e.nombre)
        ));
        await this.conectarMongoDb.desconectar();
        return Promise.resolve(personas);
    }
    async get (clave: Number) : Promise<Persona> {
        // podria haber un try catch y finally para cerrar la conexion
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('personas');
        const findResult = await collection.findOne({dni:clave});
        await this.conectarMongoDb.desconectar();
        if(findResult !== null) {
            return Promise.resolve(new Persona(findResult.dni,findResult.nombre));
        } else {
            throw new Error("No encontrado");            
        }
    }
    
    // tratar de usar bajas logicas
    async delete (clave: Number) : Promise<Boolean> {
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('personas');
        // puede ser también deleteOne  (depende el contexto de diseño del sistema)
        const findResult = await collection.deleteMany({dni:clave});
        await this.conectarMongoDb.desconectar();
        if(findResult !== null) {
            return Promise.resolve(true);
        } else {
            throw new Error("No encontrado");            
        }
    }
    
}
export default PersonaDaoMongoDb