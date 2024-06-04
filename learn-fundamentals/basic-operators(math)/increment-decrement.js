// Aumentar ou diminuir um número em um está entre as operações numéricas mais comuns.
// ++ aumenta em 1, -- diminui em 1

let counter = 2; // O incremento/decremento só pode ser aplicado a variáveis. Tentar usá-lo em um valor como 5++ causará um erro.
counter++; // serve o mesmo para counter + 1
counter--; // serve o mesmo para counter -1

// Quando o operador vai atrás da variável, ela está na “forma postfix”: counter++. A “forma de prefixo” é quando o operador vai antes da variável: ++counter.
// O formulário prefixo retorna o novo valor enquanto o formulário pós-fixo retorna o valor antigo (antes do incremento/decremento).
let num = 1;
let a = ++num;
alert(a); // 2
// Agora, vamos usar a forma postfix:
let num2 = 1;
let b = num2++;
alert(b); // 1

