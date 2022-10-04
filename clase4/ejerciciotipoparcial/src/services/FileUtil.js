import fs from 'fs'

class FileUtil {

    constructor(peliculas) {
        this.peliculas=peliculas;
    }

    leerArchivo() {
        try {
            return fs.readFileSync(this.peliculas,"utf-8");
        } catch(e) {
            throw "Error al leer el archivo";
        }
    }

    guardarArchivo(archivo,datos) {
        try {
            fs.writeFileSync(archivo,datos);
        } catch(e) {
            throw "Error al escribir en archivo";
        }
    }

}

export default FileUtil