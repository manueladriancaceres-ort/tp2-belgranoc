class Caja {

    constructor(codigo,importe,valores, comprobantes) {
        this.codigo = codigo;
        this.importe = importe;
        this.valores = valores;
        this.comprobantes = comprobantes;
    }

    calcularValor() {
        /*
        let valor = 0;
        for(let i= 0; i<this.valores.length; i++) {
            valor +=  this.valores[i] *  (i==0?1000:i==1?100:10)  ;
        }
        return valor;
        */
       return this.valores.map((valor,i) => { return valor * (i==0?1000:i==1?100:10)})
                          .reduce((sum,valor)=> sum+valor,0);
    }

    obtenerImporte(){
        return this.comprobantes.reduce(
            (sum, comp) => comp.tipo === 'I'?sum+comp.importe:sum-comp.importe,0);
    }

    hayDiferencia() {
        return this.calcularValor() !== 
        this.obtenerImporte()
    }

}

export default Caja;
