// Loops são uma forma de repetir o mesmo código várias vezes ilimitado.
let i = 0;
while(i < 3) {
    console.log(i);
    i++
}

// DO WHILE

// A verificação da condição pode ser movida abaixo do corpo do loop usando a do while sintaxe
//O loop primeiro executará o corpo, depois verificará a condição e, embora seja verdade, executará novamente e novamente.
let a = 0;
do {
  console.log(a);
  i++;
} while (a < 3)

// Esta forma de sintaxe só deve ser usada quando você deseja que o corpo do loop seja executado pelo menos uma vez, independentemente da condição ser verdadeira.