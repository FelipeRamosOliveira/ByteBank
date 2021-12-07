import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
  // Construtor
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf);
    this._bonificacao = 1.1;
    this._senha;
  }
}
