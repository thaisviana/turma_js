/*
Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
*/
var nome = prompt('nome', "");
var senha = prompt('senha', "");
while(nome == senha){
  console.log("errooou :/")
  var senha = prompt('insira uma nova senha', "");
}
if(nome != senha){
  alert("flw vlw")
}
