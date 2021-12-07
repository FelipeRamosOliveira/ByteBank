// Classe que representa a conta corrente
import { Conta } from "./Conta.js";

// Conta corrente herda de conta
export class ContaSalario extends Conta {
  // Construtor
  constructor(cliente) {
    super(cliente, 100, 0);
  }

  // Metodo sacar especifico para conta corrente
  sacar(valor) {
    let taxa = 1.01;
    return this._sacar(valor, taxa);
  }
}
