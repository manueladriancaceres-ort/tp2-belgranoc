import FileUtil from "./services/FileUtil.js";
import ProcesarPeliculas from "./services/ProcesarPeliculas.js"

try {
    const fileUtil = new FileUtil("./resources/peliculas.json");
    const procesarPeliculas = new ProcesarPeliculas(JSON.parse(fileUtil.leerArchivo()));
    const resultado = { resultados: {
                    cantidadPeliculas:procesarPeliculas.cantidadPeliculas(),
                    cantidadPersonajes:procesarPeliculas.cantidadPesonajes()} };
    fileUtil.guardarArchivo("./resources/resultado.json",JSON.stringify(resultado));  
} catch(e) {
    console.log(e);
}


