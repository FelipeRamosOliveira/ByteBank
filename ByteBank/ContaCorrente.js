// Classe que representa a conta corrente
import { Conta } from "./Conta.js";

// Conta corrente herda de conta
export class ContaCorrente extends Conta {

    // Metodo estatico de contagem de contas
    static numeroDeContas = 0;

    // Construtor
    constructor(cliente,agencia){
        super(cliente,agencia,0);
        ContaCorrente.numeroDeContas += 1; // Incrementa o numero de contas
    }

    // Metodo sacar especifico para conta corrente
    sacar(valor){

        let taxa = 1.1;
        const valorSacado = valor * taxa;

        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

}