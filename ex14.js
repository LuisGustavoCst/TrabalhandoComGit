// Atividade 14

const readline = require('readline-sync')

const metaDiaria = 5000
const faturamento = readline.questionFloat('Informe o valor faturado no dia (R$): ')

const percentualAtingido = (faturamento / metaDiaria) * 100
const diferenca = faturamento - metaDiaria

console.log('\n========== Desempenho do Dia ==========' )
console.log(`Meta diária: R$ ${metaDiaria}`)
console.log(`Faturamento do dia: R$ ${faturamento}`)
console.log(`Percentual da meta atingido: ${percentualAtingido}%`)

if (faturamento < metaDiaria) {
  console.log(`Você não atingiu a meta. Faltaram R$ ${Math.abs(diferenca)}.`)
} else {
  console.log(`Meta atingida! Excedeu em R$ ${diferenca}.`)
}

console.log('========================================\n')
