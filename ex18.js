// Atividade 18

const readline = require('readline-sync')

const percentualPontuacao = readline.questionFloat('Qual a pontuação do jogador?: ')
console.log('\n========== Nível do Jogador ==========' )
console.log(`Pontuação do jogador: ${percentualPontuacao}%`)

if (percentualPontuacao < 20) {
  console.log('Nível do jogador: iniciante')
} else if (percentualPontuacao <= 80) {
  console.log('Nível do jogador: intermediário')
} else {
  console.log('Nível do jogador: lendário')
}

console.log('========================================\n')