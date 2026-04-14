// Atividade 12

const readline = require('readline-sync')

let totalAulas = readline.questionInt('Total de aulas do curso: ')
let aulasAssistidas = readline.questionInt('Quantas aulas você já assistiu? ')

let percentual = (aulasAssistidas / totalAulas) * 100

console.log('\n========== Progresso do Curso ==========' )
console.log(`Você já concluiu ${Math.round(percentual)}% do curso.`)

if (percentual >= 100) {
  console.log('Parabéns! Curso concluído.')
} else if (percentual >= 50) {
  console.log('Você está avançando bem.')
} else {
  console.log('Você ainda está no começo do curso.')
}

console.log('========================================\n')
