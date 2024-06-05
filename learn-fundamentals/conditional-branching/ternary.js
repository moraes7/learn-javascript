// Às vezes, precisamos atribuir uma variável dependendo de uma condição.
// O chamado operador “condicional” ou “ponto de interrogação” nos permite fazer isso de uma forma mais curta e simples.
let accessAllowed = (age > 18) ? true : false;

// Múltiplo '?'
let age = prompt("Idade?")

let message = (age < 18) ? "Adolescente" :
    (age > 18) ? "Adulto" :
    (age >= 60) ? "Idoso" : ""
    console.log(message);