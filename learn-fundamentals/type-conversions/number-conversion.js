// A conversão numérica em funções e expressões matemáticas acontece automaticamente. Por exemplo, quando a divisão / é aplicada a não números:
alert("6" / "2") // "3" strings foram convertidas a numeros

// Podemos usar a Number(value) função para converter explicitamente a value em um número:
let str = "123"
alert(typeof str) // "string"

let number = Number(str) // se tornou o número 123

alert(typeof number) // "number"

//A conversão explícita geralmente é necessária quando lemos um valor de uma fonte baseada em string, como um formulário de texto, mas esperamos que um número seja inserido. Se a string não for um número válido, o resultado dessa conversão será NaN. Por exemplo:

let age = Number("uma string no lugar de um number");

alert(age); // NaN, falha ao converter