import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
  // Construtor
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf);
    this._bonificacao = 2;
    this._senha;
  }
}
