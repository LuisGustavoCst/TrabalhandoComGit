// Atividade 17

const readline = require('readline-sync')

const percentualBateria = readline.questionInt('Qual o percentual da bateria do celular?:  ')

console.log('\n========== Nível da Bateria ==========' )
console.log(`Percentual da bateria: ${percentualBateria}%`)

if (percentualBateria < 20) {
  console.log('Nível da bateria: baixo')
} else if (percentualBateria <= 80) {
  console.log('Nível da bateria: normal')
} else {
  console.log('Nível da bateria: alto')
}

console.log('========================================\n')