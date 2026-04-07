// Atividade 8

const readline = require("readline-sync")

let idadeMinima = 18

let idade = readline.questionInt("Informe a idade da pessoa: ")

console.log("\n========== Restrição da Entrada ==========\n")

if (idade >= idadeMinima) {
    console.log(`Entrada permitida! A pessoa tem ${idade} anos e pode entrar no evento.`)
} else {
    console.log(`Entrada não permitida! A pessoa tem ${idade} anos e só é permitido entrar no evento com ${idadeMinima} anos ou mais.`)
}
console.log("\n=========================================\n")