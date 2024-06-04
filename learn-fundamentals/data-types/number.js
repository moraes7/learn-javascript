// O tipo number representa números inteiros e de ponto flutuante
let number = 100;
number = 12.300;

// Infinity: representa o infinito matemático. É um valor especial maior que qualquer número.
// Podemos obtê-lo como resultado da divisão por zero:
console.log(1 / 0); // "Infinity"
// Ou apenas referencie-o diretamente:
console.log(Infinity);

// NaN (Not a Number) representa um erro em uma operação matemática incorreta ou indefinida
console.log("not a number" / 2); // "NaN"
console.log(NaN + 5); // "NaN"
console.log(5 * NaN); // "NaN"
console.log("not a number" / 3 - 1); // "NaN"


