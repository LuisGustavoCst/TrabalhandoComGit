// Atividade 5

const readline = require("readline-sync")

let objetivo = 5000

let dinheiroGuardado = readline.questionFloat("informe quanto você guardou? R$: ")

let diferenca = objetivo - dinheiroGuardado

console.log("\n========== Resultado da Economia ==========\n")
if (dinheiroGuardado >= objetivo) {
    console.log(`Parabéns! Você atingiu seu objetivo de economizar R$ ${objetivo.toFixed(2)}!`)
} else {
    console.log(`Você ainda precisa economizar mais R$ ${Math.abs(diferenca).toFixed(2)} para atingir seu objetivo de R$ ${objetivo.toFixed(2)}. Continue economizando!`)
}
console.log("========================================\n")