// Atividade 4

const readline = require('readline-sync')

let meta = 10000
let passos = readline.question("Quantos passos você deu hoje? ")

let diferenca = meta - passos

console.log("=============RESULTADO==============\n")
if (passos >= meta) {
    console.log(`Parabéns! Você atingiu sua meta diária de ${meta} passos!`)
} else {
    console.log(`Você ainda precisa caminhar mais ${Math.abs(diferenca)} passos para atingir sua meta diária de ${meta} passos. Continue se movendo!`)
}
console.log("====================================\n")