// Atividade 15

const readline = require('readline-sync')

const limiteCalorias = 2000
const caloriasConsumidas = readline.questionInt('Quantas calorias foram consumidas no dia? ')

const percentualConsumido = (caloriasConsumidas / limiteCalorias) * 100
const diferenca = caloriasConsumidas - limiteCalorias

console.log('\n========== Controle de Calorias ==========' )
console.log(`Limite diário: ${limiteCalorias} calorias`)
console.log(`Calorias consumidas: ${caloriasConsumidas}`)
console.log(`Percentual do limite consumido: ${percentualConsumido}%`)

if (caloriasConsumidas <= limiteCalorias) {
  console.log('Você está dentro do limite.')
} else {
  console.log(`Você ultrapassou o limite em ${diferenca} calorias.`)
}

console.log('========================================\n')
