// Atividade 10

const readline = require('readline-sync')

let totalPaginas = 300
let paginasLidas = readline.questionInt('Quantas páginas já foram lidas?: ')
let percentual = (paginasLidas / totalPaginas) * 100

console.log('\n========== Progresso do Livro ==========' )
console.log(`Você já concluiu ${Math.round(percentual)}% do livro.`)
console.log('========================================\n')