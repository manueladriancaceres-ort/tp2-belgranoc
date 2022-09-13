console.log("Sistema");

import FileUtil from "./services/FileUtil.js";
import PeliculaProcesada from "./services/PeliculaProcesada.js";

try {
    const fileUtil = new FileUtil("./resources/peliculas.json");
    const peliculas = JSON.parse(fileUtil.leer());
    const peliculaProcesada = new PeliculaProcesada(peliculas);
    const resultado = {cantidadPeliculas: peliculaProcesada.cantidadPeliculas(),
                        cantidadPersonajes: peliculaProcesada.cantidadPersonajes()}
    fileUtil.escribir("./resources/resultado.json", JSON.stringify(resultado) );  
} catch(e) {
    console.log(e);
}

console.log("Programa terminado");

