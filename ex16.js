// Atividade 16

const readline = require('readline-sync')

const limiteHoras = 4
const horasUso = readline.questionFloat('Quantas horas você utilizou o celular hoje? ')

const percentualUso = (horasUso / limiteHoras) * 100
const diferenca = horasUso - limiteHoras

console.log('\n========== Tempo de Tela ==========' )
console.log(`Limite diário: ${limiteHoras} horas`)
console.log(`Horas usadas: ${horasUso}`)
console.log(`Percentual do limite usado: ${percentualUso}%`)

if (horasUso <= limiteHoras) {
  console.log('Você respeitou o limite.')
} else {
  console.log(`Você ultrapassou o limite em ${diferenca} horas.`)
}

console.log('========================================\n')
