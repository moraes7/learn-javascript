// Um switch pode substituir várias verificações if. Oferece uma maneira mais descritiva de comparar um valor com múltiplas variantes.
//O switch possui um ou mais caseblocos e um padrão opcional.
let soma = 2 + 2;

switch(soma) {
    case 5:
        console.log("Errou!");
        break
    case 4:
        console.log("Acertou!");
        break
    case 3:
        console.log("Errou!");
        break
    default:
        console.log("Não sei a resposta");
}

// Agrupamento 
// Diversas variantes case que compartilham o mesmo código podem ser agrupadas.
let year = 2024;

switch(year){
    case 2020:
        console.log("Errado!");
        break
    case 2010: // agrupando dois cases
    case 2006:
        console.log("Muito errado!");
        console.log(("Estamos muito a frente"));
        break
    default:
        console.log("Eu não sei");
}

// Usando prompt
let num = prompt("Digite um valor: ")
switch(num) {
    case "0":
    case "1":
        console.log("Zero e um");
        break
    case "2":
        console.log("Dois");
        break
    case 3:
        console.log("Não executar");
        break
    default:
        console.log("Valor desconhecido");
}
// Para 3, o resultado de prompt é uma string "3", que não é estritamente igual === ao número 3. Então temos um código morto case 3. A variante default será executada.
