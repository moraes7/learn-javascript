// Na conversão booleana os valores que são intuitivamente "vazios" como 0, uma string vazia, null, undefined e NaN, tornam-se false, outros valores se tornam true
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false