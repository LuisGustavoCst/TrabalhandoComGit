// Atividade 19

const readline = require('readline-sync')

const horasDormidas = readline.questionFloat('Quantas horas você dormiu? ')

console.log('\n========== Qualidade do Sono ==========' )
console.log(`Horas dormidas: ${horasDormidas}`)

if (horasDormidas < 5) {
  console.log('Qualidade do sono: péssimo')
} else if (horasDormidas <= 8) {
  console.log('Qualidade do sono: ok')
} else {
  console.log('Qualidade do sono: excelente')
}

console.log('========================================\n')
