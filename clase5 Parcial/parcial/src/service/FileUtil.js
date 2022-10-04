import fs from 'fs';

class FileUtil {
    constructor(archivo) {
        this.archivo=archivo;
    }
    leer() {
        return fs.readFileSync(this.archivo,"utf8");
    }
    guardar(archivo,datos) {
        fs.writeFileSync(archivo,datos);
    }
}

export default FileUtil