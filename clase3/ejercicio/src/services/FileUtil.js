import fs from 'fs'

class FileUtil {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }
    leerArchivo() {
        return fs.readFileSync( this.nombreArchivo , 'utf-8' );
    }
    escribirArchivo(datos) {
        fs.writeFileSync( this.nombreArchivo , datos );
    }
}

export default FileUtil