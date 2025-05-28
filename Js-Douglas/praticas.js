//faça um programa que leia um numero digitado de 1 a 100, e me de as dicas de acordo com os numeros digitados,
//  e me conceda acesso caso o numero seja acertado.

const prompt = require("prompt-sync")();
function tarefas(tentativa,senha) {
  let numero = [];
  let contador = 0;

  do {
    contador++;
    numero = Number(
      prompt("Tentatina " + contador + " Informe um numero de 1 a 100: ")
    );
    if (numero < senha) {
      console.log("A senha é um numero maioir que " + numero);
    } else {
      if (numero > senha) {
        console.log("A senha é um nuemro menor que " + numero);
      }
      if (numero == senha) {
        console.log("Acesso concedido");
        break;
      }
    }
  } while (contador < tentativa);
  if (contador == 7 && numero !== senha) {
    console.log("Números de tentativas acabaram");
  }
}
tarefas(3,90)

// for (let x = 0; x < 7; x++) {
//   numero = Number(prompt("Digite um numero de 1 a 100: "));
//   if (numero == senha) {
//     console.log("Acesso concedido");
//     break;
//   }
// }
// if (numero !== senha) {
//   console.log("Suas tentarivas acabaram");
// }
