const prompt = require('prompt-sync')();

let login = {
    usuario: "lucas",
    senha: 5896
}
let loguin = ""
let senha = 0

loguin = prompt("Digite o usuario: ");
senha = Number(prompt("Digite a senha: "))

if(loguin == login.usuario && senha == login.senha){
    console.log("Acesso concedido");
    
        
}else{
    console.log("Senha ou usuario incorreto");
    
}