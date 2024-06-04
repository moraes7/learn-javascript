// As tarefas encadeadas são avaliadas da direita para a esquerda. Primeiro, a expressão mais à direita 2 + 2 é avaliada e depois atribuída às variáveis ​​à esquerda: c, b e a. No final, todas as variáveis ​​compartilham um único valor.
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

// para fins de legibilidade, é melhor dividir esse código em poucas linhas:
c = 2 + 2;
b = c;
a = c;