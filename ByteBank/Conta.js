// Classe que representa a conta corrente
import { Cliente } from "./Cliente.js";

export class Conta {
  // Construtor
  constructor(cliente, agencia, saldiInicial) {
    this._saldo = saldiInicial;
    this._agencia = agencia;
    this._cliente = cliente;
    if (this.constructor === Conta) {
      throw new Error("Não é possível instanciar Conta diretamente");
    }
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

  // Metodo para sacar (Publico)
  sacar(valor) {
    let taxa = 1;
    return this._sacar(valor, taxa);
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
