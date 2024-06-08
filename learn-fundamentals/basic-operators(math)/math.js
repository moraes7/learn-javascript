
function adicao(adi1, adi2) {
    let soma = adi1 + adi2
    return `Operador de adição: ${adi1} + ${adi2} = ${soma}`
}

log(adicao(5, 5));

// -----------------------------------------------------------------------------

function subtracao(sub1, sub2) {
    let menos = sub1 - sub2
    return `Operador de subtração: ${sub1} - ${sub2} = ${menos}`
}

log(subtracao(100, 49));

// -----------------------------------------------------------------------------

function multiplicacao(multi1, multi2) {
    let vezes = multi1 * multi2;
    return `Operador de multiplicação: ${multi1} * ${multi2} = ${vezes}`
}

log(multiplicacao(7, 2));

// -----------------------------------------------------------------------------

function divisao(div1, div2) {
    let dividir = div1 / div2;
    return `Operador de divisão: ${div1} / ${div2} = ${dividir}`
}

log(divisao(30, 2))

// -----------------------------------------------------------------------------

function restoDivisao(rest1, rest2) {
    let resto = rest1 % rest2;
    return `Operador de resto de divisão: ${rest1} % ${rest2} = ${resto}`
}

log(restoDivisao(5, 2))

// -----------------------------------------------------------------------------

function exponenciacao(exp1, exp2) {
    let expo = exp1 ** exp2;
    return `Operador de exponenciação: ${exp1} ** ${exp2} = ${expo}`
}

log(exponenciacao(2, 3))