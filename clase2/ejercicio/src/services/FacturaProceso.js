import Factura from '../models/Factura.js'  // una factura

class FacturaProceso {

    constructor(facturas) {
        this.facturas = facturas;  // varias facturas, una lista
    }

    facturasConDiferencia() {
        try { 
            return this.facturas.filter( factura => { 
                const fact = new Factura(factura.codigo,factura.total,factura.items);
                return fact.facturaConDiferencia();
            });    
        } catch(e) {
            throw "Se produjo un error";
        }
    }
    
}

export default FacturaProceso;