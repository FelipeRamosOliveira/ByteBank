// Classe que representa a conta corrente - Abstrata
// * Classe abstrata  = não pode ser instanciada diretamente
import { Cliente } from "./Cliente.js";

export class Conta {
  // Construtor
  constructor(cliente, agencia, saldiInicial) {
    //Evitar que o usuario crie uma conta sem um cliente
    if (this.constructor === Conta) {
      throw new Error("Não é possível instanciar Conta diretamente");
    }
    this._saldo = saldiInicial;
    this._agencia = agencia;
    this._cliente = cliente;
  }

  // Acessores
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  // Metodo para sacar (Abstrato)
  sacar(valor) {
    throw new Error("O metodo sacar não deve ser chamado diretamente");
  }
  // Metodo para sacar (Privado)
  _sacar(valor, taxa) {
    const valorSacado = valor * taxa;

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  // Metodo para depositar
  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }
  // Metodo para transferir
  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
