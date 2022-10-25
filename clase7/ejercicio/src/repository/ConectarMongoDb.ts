import { MongoClient } from 'mongodb'

class ConectarMongoDb {

    private url = 'mongodb://localhost:27017';
    private client = new MongoClient(this.url);
    private dbName = 'myProject';

    async conectar() {
        try {
            await  this.client.connect();
            console.log('conectado');
            const db = this.client.db(this.dbName);
            return db;            
        } catch(e) {
            throw 'Error de conexion'         
        }
    }

    async desconectar() {
        try {
            await this.client.close();
            console.log('desconectado');            
        } catch(e) {
            throw 'error al cerrar la conexion';            
        }
    }

}

export default ConectarMongoDb