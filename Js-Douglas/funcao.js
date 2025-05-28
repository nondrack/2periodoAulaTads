// let numeros = [1,2,3]

// numeros.forEach(function(numeros){
//     console.log(numeros / 2);
// })

// Usando um objeto estático
// let numeroAleatorio = Math.random(1,5,6,9,8);
// console.log(numeroAleatorio);

// Criando uma instância de um objeto
// let dataAtual = new Date();
// console.log(dataAtual);

// Usando métodos de objetos em tipos primitivos (devido ao autoboxing)
// let nome = "Maria";
// console.log(nome.toUpperCase());

// Usando métodos de Array

const prompt = require("prompt-sync")();

// let number = Number(prompt("Digite um numero: "));

// let numeros = [1, 2, 3];
// numeros.push(number);
// console.log(numeros);

// let pessoa = {
//     nome: "Lucas",
//     idade: 25,
//     cidade: "Araruna",
//     ISEstudante: true
// };
// console.log(pessoa)

// pessoa.idade = prompt("Digite a nova idade: ");
// pessoa.cidade = prompt("Digite a nova cidade: ");
// pessoa.nome = prompt("Digite o novo nome: ");
// pessoa.altura = prompt("Digite sua altura: ");
// console.log(pessoa)

// let pessoa = {
//     nome: "Lucas",
//     idade: 25,
//     cidade: "Araruna",
//     ISEstudante: true,

//     apr: function() {
//     console.log("Olá Meu nome é " + this.nome + " e eu tenho " + this.idade + " anos. ");
//     }
// };
// pessoa.apr();

// function mostrarOla(){
//     console.log("Ola Mundo")
// }
// mostrarOla();

// function somar(){
//     let number1 = 5
//     let number2 = 6
//     let resultado = number1 +  number2
//     console.log("A soma é: " + resultado);
    
// }
// somar();


function darBoasVindas(nome){
    nome = prompt("Digite seu nome: ");
    console.log("Boas vindas " + nome)
}

darBoasVindas()


// function multiplicar(a,b){
//     let resultado = a*b;
//     return resultado;
// }
// let produto = multiplicar(3,8)

// console.log(produto);

// const saudar = function(nome){
//     nome = prompt("Digite seu nome: ")
//     console.log("Boas vindas " + nome)
    
// }
// saudar("nome");


// setTimeout(function() { 
//     console.log("Esta mensagem aparece depois de 2 segundos");
//   }, 2000);


// let numeros = [1, 2, 3];
// numeros.forEach(function(numero) {
//   console.log("Número: " + numero);
// });

// function somarNumeros(num1, num2) {
//     let resultado = num1 + num2;
//     return resultado;
//   }
  
//   let total = somarNumeros(15, 7);


// const duplicar = x => x * 2;
// const somarCinco = y => y + 5;

// let valorInicial = 10;
// let resultadoIntermediario = duplicar(valorInicial);
// let resultadoFinal = somarCinco(resultadoIntermediario);

// console.log(resultadoFinal);