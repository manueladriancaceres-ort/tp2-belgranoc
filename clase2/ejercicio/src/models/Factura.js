class Factura {
    constructor(codigo,total,items) {
        this.codigo = codigo;
        this.total = total;
        this.items = items;
    }
    calcularTotalFactura() {
        // console.log(typeof(this.items));
        if( typeof(this.items)=="object" && Array.isArray(this.items) ) {
            return this.items.reduce( (acumulador,item) => acumulador+item,0 );
        } else {
            throw 'Se produjo un error';
        }
    }
    facturaConDiferencia() {
        // total distinto a suma de items
        try {
            return  (this.total - this.calcularTotalFactura()) == 0 ? false:true;
        } catch(e) {
            throw e;
        }        
    }

}

export default Factura