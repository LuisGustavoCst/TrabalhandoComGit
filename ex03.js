// Atividade 3

const readline = require('readline-sync')

let nickname = readline.question("Nome (nickname) do jogador: ")
let jogoFavorito = readline.question("Jogo favorito: ")
let pontuacaoAtual = readline.question("Pontuação atual: ")

console.log("\n========== Perfil do Jogador ==========\n")
console.log(`Nickname: ${nickname}`)
console.log(`Jogo favorito: ${jogoFavorito}`)
console.log(`Pontuação: ${pontuacaoAtual}`)
console.log("========================================\n")