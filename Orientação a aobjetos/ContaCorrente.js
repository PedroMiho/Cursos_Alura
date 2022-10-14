import {Cliente} from "./Cliente.js"

export class ContaCorrente{
    static numeroContas = 0;
    agencia;
    _cliente;
    _saldo = 0;     //#saldo = 500;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente    
    }

    get saldo(){
        return this._saldo
    }

    constructor (cliente, agencia){
        this._cliente = cliente
        this.agencia = agencia;
        ContaCorrente.numeroContas += 1;
    }

    sacar (valor){
        if(valor<=this._saldo){
            this._saldo -= valor;
            return valor
        }
    }

    depositar (valor){
        if(valor <= 0) return;
        this._saldo += valor
    }

    transferencia(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        valor = 20;
    }

}    

