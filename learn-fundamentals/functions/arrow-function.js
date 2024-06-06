// Arrow function é uma função que aceita argumentos arg1..argN, depois avalia o expression do lado direito com seu uso e retorna seu resultado.
const somar = (x, y) => {
    return x + y;
}
console.log(somar(5, 5)); // 10

// Uma arrow function ainda mais resumida se a função tiver apenas uma linha
const multiplicar = (a, b) => a * b

console.log(multiplicar(2, 5));

// Quando se tem apenas um parâmetro, não é necessário o ()
const sobrenome = sob => `Nicolas ${sob}` //"Nicolas " + sob;

console.log(sobrenome("Moraes"));