/*
Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
*/

var nota = prompt('por favor insira uma nota', 0);
nota = parseInt(nota)
while(nota < 0 || nota > 10){
  console.log("sua nota é inválida")
  nota = prompt('por favor insira uma nota novamente', 0);
  nota = parseInt(nota)
}
if(nota >= 0 || nota <= 10){
  alert("nota válida")
}
