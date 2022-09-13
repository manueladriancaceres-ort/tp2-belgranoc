import fs from 'fs'

class FileUtil {
    constructor(archivo) {
        this.archivo = archivo
    }

    leer() {
        try {
            return fs.readFileSync(this.archivo, "utf-8");
        } catch(e) {
            throw "No existe el archivo";
        }
    }    

    escribir (archivo,datos) {
        try {
            return fs.writeFileSync(archivo,datos);
        } catch(e) {
            throw "Error al escribir el archivo";
        }
    }

}

export default FileUtil;