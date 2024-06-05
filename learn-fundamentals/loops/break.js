//Normalmente, um loop termina quando sua condição se torna falsa. Mas podemos forçar a saída a qualquer momento usando break. Por exemplo, o loop abaixo pede ao usuário uma série de números, “quebrando” quando nenhum número é inserido:
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break;

  sum += value;

}
console.log("Sum: " + sum)