// Podemos passar dados arbitrários para funções usando parâmetros.
function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log(`A soma entre ${n1} e ${n2} é ${resultado}`);
}

somar(10, 15);

function somar2(num1, num2, num3, num4) {
    let result1 = num1 + num2;
    let result2 = num3 + num4;

    let result3 = result1 + result2;

    console.log(`Primeiro resultado: ${result1}`);
    console.log(`Segundo resultado: ${result2}`);
    console.log(`Resultado final: ${result3}`);
}

somar2(10, 10, 10, 10);