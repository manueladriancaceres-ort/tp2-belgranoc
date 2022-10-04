import PersonaDaoMemoria from "./repository/PersonaDaoMemoria.js";
import Dao from "./repository/Dao.js"
import Persona from "./models/Persona.js";
import express from 'express'
import bodyParser from "body-parser";

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