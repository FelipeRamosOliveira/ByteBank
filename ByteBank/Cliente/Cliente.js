// Classe que representa o cliente
export class Cliente {
  // Método que retorna o nome do cliente
  get cpf() {
    return this._cpf;
  }
  // Construtor
  constructor(nome, cpf, senha) {
    this.nome = nome;
    this._cpf = cpf;
    this._senha = senha;
  }

  autenticar(senha) {
    return senha === this._senha;
  }
}
