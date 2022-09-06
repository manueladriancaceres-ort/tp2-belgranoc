import { leer, escribir } from './services/UtilitariosArchivos.js';
import CajaProceso from './services/CajaProceso.js'

try {
    const contenido = leer('./resource/cajas.json');
    const listaCajas2 = JSON.parse(contenido);

    const procesamiento = new CajaProceso(listaCajas2);
    escribir('./resource/cajasf.json',procesamiento.cajasConDiferencia());

} catch (e) {
    console.log(e);
}


