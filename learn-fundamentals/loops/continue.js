// O continue é uma “versão mais leve” do break. Isso não interrompe todo o ciclo. Em vez disso, interrompe a iteração atual e força o loop a iniciar uma nova (se a condição permitir).
for(let i = 0; i < 10; i++) {
    if(i % 2 == 0) continue
    console.log(i); // 1 3 5 7 9
}