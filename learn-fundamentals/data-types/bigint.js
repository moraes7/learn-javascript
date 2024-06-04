/* Em JavaScript, o tipo “número” não pode representar com segurança valores inteiros maiores que (isto é ) ou menores que negativos.(253-1)9007199254740991-(253-1) */

/* Para ser realmente preciso, o tipo “número” pode armazenar números inteiros maiores (até ), mas fora do intervalo seguro de números inteiros haverá um erro de precisão, porque nem todos os dígitos cabem no armazenamento fixo de 64 bits. Portanto, um valor “aproximado” pode ser armazenado.1.7976931348623157 * 10308±(253-1) */
console.log(9007199254740991 + 1); // "9007199254740992"
console.log(9007199254740991 + 2); // "9007199254740992"

//BigInttype foi adicionado recentemente à linguagem para representar números inteiros de comprimento arbitrário.
//Um BigIntvalor é criado anexando nao final de um número inteiro:
const bigInt = 1234567890123456789012345678901234567890n; // o "n" significa que é BigInt
