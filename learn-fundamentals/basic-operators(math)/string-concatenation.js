// Normalmente, o operador mais + soma números. Mas, se o binário + for aplicado a strings, ele as mescla (concatena):
let s = "my" + "string"
alert(s) // "mystring"

// Se algum dos operandos for uma string, o outro também será convertido em uma string.
alert('1' + 2) // "12"
alert('2' + 1) // "21"
alert(2 + 2 + '1') // "41"