/*
Ser autenticavel significa ter a propriedade senha e a funcao autenticar
*/

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehautenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static ehautenticavel(autenticavel) {
    return (
      autenticavel.autenticar && typeof autenticavel.autenticar === "function"
    );
  }
}
