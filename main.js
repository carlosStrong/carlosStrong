let nomeUsuario = "";
let elemento = document. querySelector("#nome-Usuario");

while(nomeUsuario==""){
    prompt("qual o seu nome?");
}

if(nomeUsuario==nu){
    elemento.textContent = "seja muito bem vindo.";
}else{
    elemento.textContent = nomeUsuario;
}