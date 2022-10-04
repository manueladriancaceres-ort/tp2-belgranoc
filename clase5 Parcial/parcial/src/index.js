console.log("Sistema");

import FileUtil from './service/FileUtil.js'
import AutoProceso from './service/AutoProceso.js'

try {
    const fileUtil = new FileUtil("./resources/autos.json");
    const autoProceso = new AutoProceso(JSON.parse(fileUtil.leer()));
    const resultado = {
        cantidadMarcas: autoProceso.cantidadMarcas() ,
        cantidadModelos: autoProceso.cantidadModelos(),
        cantidadMarcasEEUU: autoProceso.cantidadMarcasEEUU()
    }
    fileUtil.guardar("./resources/resultado.json",JSON.stringify(resultado));
} catch(e) {
    console.log(e);
}
