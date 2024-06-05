// Uma verificação regular de igualdade == tem um problema. Não pode diferenciar 0 de false:
alert(0 == false); // true

// O mesmo ocorre com uma string vazia
alert("" == false); // true

// Isso acontece porque operandos de diferentes tipos são convertidos em números pelo operador de igualdade ==. Uma string vazia, assim como false, torna-se zero.

// Um operador de igualdade estrito === verifica a igualdade sem conversão de tipo. Em outras palavras, se a e b forem de tipos diferentes, então a === b retornarão imediatamente false sem tentativa de convertê-los.
alert(0 === false); // false, porque são tipos diferentes

// Existe também um operador de “não igualdade estrita” !== análogo a !=.