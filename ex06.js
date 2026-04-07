// Atividade 6

const readline = require("readline-sync")

let meta = 40

let horasEstudadas = readline.questionFloat("Informe quantas horas você estudou neste mês?: ")

let diferenca = meta - horasEstudadas

console.log("\n========== Resultado dos Estudos ==========\n")
if (horasEstudadas >= meta) {
    console.log(`Parabéns! Voce atingiu sua meta de ${meta} horas de estudo no mês!`)
} else {
    console.log(`Voce ainda precisa estudar mais ${Math.abs(diferenca).toFixed(2)} horas para atingir sua meta de ${meta} horas. Continue se dedicando!`)
}
console.log("\n=========================================\n")