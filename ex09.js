// Atividade 9

const readline = require(`readline-sync`)

let valorFreteGratis = 100

let valorCompra = readline.questionFloat("Informe o valor da compra: R$ ")

console.log("\n========== Frete da Compra ==========\n")

if (valorCompra >= valorFreteGratis) {
    console.log(`Frete grátis! O cliente atingiu o valor mínimo de R$ ${valorFreteGratis}.`)
} else {
    let valorFaltante = valorFreteGratis - valorCompra
    console.log(`Frete não disponível! Faltam R$ ${valorFaltante} em produtos para atingir o frete grátis.`)
}

console.log("\n====================================\n")