var nome = prompt('Insira o seu nome:','')
var idade = prompt('Insira a sua idade:','')
var salario = prompt('Insira o seu salário:','')
var sexo = prompt('Insira o seu sexo:',0)
var estadoCivil = prompt('Insira o seu estado civil:','')

function validarComandos (nome, idade, salario, sexo, estadoCivil) {
    console.log(nome.lenght)
    if (nome.lenght < 3) {
      alert("Comando inválido")
    }
     if (idade > 150 || idade < 0) {
      alert("Comando inválido")
    }
    if (salario > 0) {
      alert("Comando inválido")
    }
    if (sexo != "f" || sexo != "m") {
      alert("Comando inválido")
    }
     if (estadoCivil != "s"|| estadoCivil != "c" || estadoCivil != "d" ||estadoCivil != "v") {
      alert("Comando inválido")
    }
}
validarComandos (nome, idade, salario, sexo, estadoCivil)
