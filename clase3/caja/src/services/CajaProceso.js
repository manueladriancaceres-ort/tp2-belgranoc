import Caja from '../models/Caja.js'

class CajaProceso {
    constructor(cajas) {
        this.cajas = cajas;
    }

    cajasConDiferencia() {
        return this.cajas.filter(caja => {
            const estaCaja = new Caja(caja.codigo, caja.importe, caja.valores, caja.comprobantes);
            return estaCaja.hayDiferencia();
        })
    } 
}

export default CajaProceso;
