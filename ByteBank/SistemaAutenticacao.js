/*
Ser autenticavel significa ter a propriedade senha e a funcao autenticar
*/

export class SistemaAutenticacao {
  static login(funcionario, senha) {
    return funcionario.autenticar (senha);
  }
}
