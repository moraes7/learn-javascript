// Existe um comportamento não intuitivo quando null ou undefined são comparados com outros valores.Para uma verificação estrita de igualdade ===. Esses valores são diferentes porque cada um deles é de um tipo diferente.
alert(null === undefined); // false

// Eles se igualam (no sentido de ==), mas não em qualquer outro valor.
// Uma verificação não estrita ==
alert(null == undefined); // true

// Para matemática e outras comparações < > <= >=
// Lembrando que null torna-se 0, enquanto undefined torna-se NaN.
alert(null > 0); // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true

/*
 O último resultado afirma que "null é maior ou igual a zero", então em uma das comparações acima deve ser true, mas ambos são falsos.

A razão é que uma verificação de igualdade == e comparações > < >= <= funcionam de maneira diferente. As comparações são convertidas null em um número, tratando-o como 0. É por isso que (3) null >= 0 é verdadeiro e (1) null > 0 é falso.

Por outro lado, a verificação de igualdade == para undefined e null é definida de tal forma que, sem quaisquer conversões, eles se igualam e não são iguais a mais nada. É por isso que (2) null == 0 é falso.
*/

// O valor undefined não deve ser comparado a outros valores
alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)

/*
Comparações (1) e (2) retorna false porque undefined são convertidos em NaN e NaN é um valor numérico especial que retorna false para todas as comparações.
A verificação de igualdade (3) retorna false porque undefined é igual apenas a null, undefined e nenhum outro valor.
*/