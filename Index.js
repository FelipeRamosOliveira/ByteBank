// Importar modulos (npm) init)
import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"

// Exemplo de uso de classes
// Criar clientes
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

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
const poupanca = new ContaPoupanca(cliente1,1001,1000);
console.log(poupanca);

// Criar conta generica
const generica = new Conta(cliente1,1001,1000);
console.log(generica);