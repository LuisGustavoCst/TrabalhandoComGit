// Atividade 1

const readline = require('readline-sync');

let nome = readline.question("Digite seu nome: ")

if (nome == "Alice") {
console.log("Olá, Alice! Bem-vinda de volta!")
} else {
console.log(`Olá, ${nome}! Prazer em conhecê-lo!`)
 }

//Atividade 2
const readline = require('readline-sync');

let nome = readline.question("Digite seu nome: ")
let curso = readline.question("Qual seu curso: ")
let idade = readline.question("Qual sua idade: ")

console.log(`Olá, ${nome}! Você tem ${idade} anos e está cursando ${curso}, Bem-vindo!`)
