// Importar modulos (npm) init)
import { Cliente } from "./Cliente/Cliente.js";
import { Conta } from "./Conta/Conta.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
// Funcinários
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

// Exemplo de uso de classes
// Criar clientes
const cliente1 = new Cliente("Ricardo", 11122233309,"123");
const cliente2 = new Cliente("Alice", 88822233309,"123");

// Criar contas correntes
const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(102, cliente2);

// Aplicar operações
conta1.depositar(1000);
conta1.sacar(100);
let valor = 1000;
conta1.tranferir(valor, conta2);

// Verificar
console.log(conta1);

// Criar contas poupanças
const poupanca = new ContaPoupanca(cliente1, 1001, 1000);
console.log(poupanca);

// Criar conta generica (abstrata)
// const generica = new Conta(cliente1, 1001, 1000);
// console.log(generica);

// Criar funcionarios

const gerente = new Gerente("Kunumi", "123.456.789-10", 1000);
gerente.cadastrarSenha("123456");

const diretor = new Diretor("Kunumi", "123.456.789-10", 1000);
diretor.cadastrarSenha("123456");

console.log(gerente._senha);
console.log(diretor);

console.log(SistemaAutenticacao.login(gerente, "123456"));

