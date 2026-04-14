// Atividade 13

const readline = require('readline-sync')

const franquiaTotal = readline.questionFloat('Total de dados disponiveis (GB): ')
const dadosUtilizados = readline.questionFloat('Dados ja utilizados (GB): ')

const percentualUso = (dadosUtilizados / franquiaTotal) * 100

console.log('\n========== Progresso da Franquia ==========' )
console.log(`Voce ja usou ${Math.round(percentualUso)}% da sua franquia de dados.`)

if (percentualUso >= 100) {
  console.log('Limite excedido.')
} else if (percentualUso >= 80) {
  console.log('ATENCAO: Voce esta proximo do limite.')
} else {
  console.log('Uso dentro do limite.')
}

console.log('========================================\n')
