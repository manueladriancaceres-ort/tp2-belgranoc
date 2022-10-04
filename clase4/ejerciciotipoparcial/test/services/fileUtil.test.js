import FileUtil from '../../src/services/FileUtil.js'

test('el metodo leer deberia retornar el contenido del archivo', () => {
    const fileUtil = new FileUtil('./resources/texto.txt');
    expect(fileUtil.leerArchivo()).toBe('prueba');
});


test('el metodo leer deberia lanzar una excepcion si no existe el archivo', () => {
    try {
        const fileUtil = new FileUtil('./resources/noexiste.txt');
        fileUtil.leerArchivo();
    } catch(e) {
        console.log(e);
        expect(e).toBe('Error al leer el archivo');
    }
});

