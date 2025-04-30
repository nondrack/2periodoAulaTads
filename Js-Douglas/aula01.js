// let numeros = [1,2,9,8,6,10]

// console.log(numeros[3]);

// let numeros = [1,7,8,2,4,6,9]

// for (let x=0; x<7; x++){
//     console.log(numeros[x]);
    
// }
const prompt = require("prompt-sync")();

// const numeros = [4,5,7,9,20,40]
// let media =0
// for (let x = 0; x < 6; x++){
//     media = media + numeros[x]
// }

// media = media / 6
// console.log('media: ', media);
let soma = 0
let contador = 0
let numeros = [3,-2,5,-9,5,1,-7,8,5,10]

for (x = 0; x <10; x++){
    if(numeros[x] < 0){
        contador = contador +1
    }else{
        soma = soma +numeros[x]
    }
}
console.log("A quantidade de numeros negativos são: " + contador);
console.log("A soma dos numeros positivos é:  " + soma);




