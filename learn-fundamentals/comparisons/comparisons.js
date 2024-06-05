/*
Maior que: a > b, menor que: a < b
Maior igual a: a >= b, menor igual a: a <= b
Igual a: a == b observe que o sinal de igualdade duplo == significa o teste de igualdade, enquanto um único sinal de igualdade a = b significa uma tarefa.
Não é igual: em matemática a notação é ≠, mas em JavaScript é escrita como a != b.
*/

// Todos os operadores de comparação retornam um valor booleano
alert(2 > 1); // true (correto)
alert(2 == 1); // false (errado)
alert(2 != 1); // true (correto)

// Um resultado de comparação pode ser atribuído a uma variável, assim como qualquer valor
let resultado = 14 > 7;
alert(resultado); // true