// O sinal de mais + existe em duas formas: a forma binária e a forma unária.

// O sinal de mais unário ou, em outras palavras, o operador de mais + aplicado a um único valor, não faz nada com os números. Mas se o operando não for um número, o sinal de adição unário o converte em um número.

// número não afetado
let x = 1;
//alert( +x ); // 1

// não-números convertidos
//alert( +true ); // 1
//alert( +"" );   // 0

// faz a mesma coisa que Number(...), mas é mais curto.

// convertendo strings em números
let apples = "2"
let oranges = "3"
//alert(+apples + +oranges) // 5