import FileUtil from './services/FileUtil.js'
import ProcesoPersonas from './services/ProcesoPersonas.js'

const fileUtil = new FileUtil('./resources/personas.json');
const personasObj = JSON.parse(fileUtil.leerArchivo());

const procesoPersonas = new ProcesoPersonas(personasObj);
const resultado = { totalPersonas: procesoPersonas.cantidadPersonas(),
                    personasConCp1000: procesoPersonas.cantidadPorCodigoPostal(1000)  };

const fileUtilResultado = new FileUtil('./resources/resultados.json');
fileUtilResultado.escribirArchivo( JSON.stringify(resultado) );