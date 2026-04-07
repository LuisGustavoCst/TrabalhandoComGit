// Atividade 7

const readline = require("readline-sync")

let mediaAprovacao = 7

let notaFinal = readline.questionFloat("Informe a nota final do aluno: ")

console.log("\n========== Resultado Final ==========\n")
if (notaFinal >= mediaAprovacao) {
    console.log(`Aprovado! O aluno atingiu a nota mínima de ${mediaAprovacao}.`)
} else {
    console.log(`Reprovado! O aluno não atingiu a nota mínima de ${mediaAprovacao}.`)
}
console.log("\n====================================\n")