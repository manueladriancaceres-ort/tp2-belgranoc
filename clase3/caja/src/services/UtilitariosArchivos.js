import fs from 'fs';

export function leer(rutaArchivo) {
    try {
        return fs.readFileSync(rutaArchivo, 'utf-8');
    }
    catch (e) {
        // console.log(e);
        throw 'hubo un problema al leer el archivo';
    }
}

export function escribir(rutaArchivo,objetoJson) {
    try {
        return fs.writeFileSync(rutaArchivo,JSON.stringify(objetoJson)
        )
    }
    catch (e) {
        console.log(e);
        throw 'hubo un problema al escribir el archivo';
    }
}
