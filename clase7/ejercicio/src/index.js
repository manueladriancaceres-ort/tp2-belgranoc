import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import PersonaRouter from './router/PersonaRouter.js';
const app = express();
app.use(bodyParser.json());
app.use(cors());
new PersonaRouter(app, "/api/personas");
app.get('/api/ping', (req, res) => {
    res.send('pong');
});
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// conexion con DAO
/*
import Persona from "./models/Persona.js";

const personaDaoMongoDb : PersonaDaoMongoDb = new PersonaDaoMongoDb();
// await personaDaoMongoDb.add(new Persona(39000000,'Maria'));
console.log(await personaDaoMongoDb.findAll());
console.log(await personaDaoMongoDb.get(35000000));
console.log(await personaDaoMongoDb.delete(35000000));
*/
// prueba conexion a base de datos con clase conectarmongodb
// este codigo podria estar en en test
/*
import ConectarMongoDb from './repository/ConectarMongoDb.js'
const conexion : ConectarMongoDb = new ConectarMongoDb();
try {
    await conexion.conectar();
    await conexion.desconectar();
} catch (e) {
    console.log(e);
}
*/
// conexion a base de datos mongodb
// https://www.npmjs.com/package/mongodb
/*
import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await  client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
  // the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

*/
// clase del 17/10
/*
import express from 'express'
import bodyParser from "body-parser";

import PersonaDaoMemoria from "./repository/PersonaDaoMemoria.js";
import Dao from "./repository/Dao.js"
import Persona from "./models/Persona.js";

const personasRepo : Dao<Persona,Number> = new PersonaDaoMemoria();
const persona : Persona = new Persona(234,"Juan");
personasRepo.add(persona);
const persona1 : Persona = new Persona(235,"Pedro");
personasRepo.add(persona1);


const app = express()
app.use(bodyParser.json());
app.use(cors());

const port = 3000

app.get('/api/ping', (req, res) => {
  res.send('pong')
})

app.get('/api/personas', async (req, res) => {
    res.json( await personasRepo.findAll())
})
  
app.post('/api/personas', async (req, res) => {
    // console.log("ver " + req.body.dni + " " + req.body.nombre );
    const persona: Persona = new Persona(req.body.dni, req.body.nombre);
    await personasRepo.add(persona);
    res.json( {"resultado": "ok"} )
})

app.delete('/api/personas/:id', async (req, res) => {
    // console.log(req.params.id);
    await personasRepo.delete(Number(req.params.id));
    res.json( {"resultado": "ok"} )
})

app.get('/api/personas/:id', async (req, res) => {
    res.json( await personasRepo.get(Number(req.params.id)) )
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


function cors(): any {
    throw new Error("Function not implemented.");
}

*/
/*
async function fun() {
    await personasRepo.findAll() ;
}
*/
// const fun = async () => {return await personasRepo.findAll()}
// console.log( await personasRepo.findAll() );
// console.log( await fun() );
/*
const resolve = () => {};
const reject = () => {};
const error = () => {};
fun()
    .then(resolve,reject)
    .catch(error)
*/
// console.log("Terminado");
/*
import Persona from './models/Persona.js'
const persona:Persona = new Persona(2412342,"Carlos");
console.log(persona.getNombre());
*/
/*
var numero:Number = 10; // int numero = 10;
numero = "Algo";

let bandera:boolean = true;
bandera = 10;
*/
//
// patrones de diseño
// builder
// factory 
// dto
// "dao"
