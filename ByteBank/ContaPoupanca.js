// Classe que representa a conta poupança
import { Conta } from "./Conta.js";

// Metodo estatico de contagem de contas
export class ContaPoupanca extends Conta {

    // Metodo estatico
    static numeroDeContas = 0;

    // Construtor
    constructor(cliente,agencia,saldoInicial) {
        super(cliente,agencia,saldoInicial);
        ContaPoupanca.numeroDeContas += 1; // Incrementa o numero de contas
    }

}