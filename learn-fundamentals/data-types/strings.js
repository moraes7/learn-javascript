// Uma string em JS deve estar entre aspas
let string1 = "Hello World";
let string2 = 'Aspas simples também são aceitas'
let phrase = `String com crase ${string1}`

let nome = "Nicolas";
console.log(`Hello, ${nome}!`); // "Hello, Nicolas"

console.log(`O resultado de 2 + 2 é ${2 + 2}`); // "O resultado de 2 + 2 é 4"

// aspas não são aceitas
console.log("O resultado de 2 + 2 é ${2 + 2}"); // "O resultado de 2 + 2 é ${2 + 2}"