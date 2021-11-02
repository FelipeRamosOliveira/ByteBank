// Classe que representa o cliente
export class Cliente{

    // Método que retorna o nome do cliente
    get cpf(){
        return this._cpf;
    }
    // Construtor
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}