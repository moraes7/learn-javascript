/* O valor especial undefined também se destaca. Ele cria um tipo próprio, assim como null.
O significado de undefined é “valor não atribuído”. */

// Se uma variável for declarada, mas não atribuída, então seu valor será undefined:
let age;
console.log(age); // "undefined"

// Tecnicamente é possível atribuir explicitamente undefined a uma variável. Mas não é recomendado, normalmente se utiliza null, undefined é reservado como valor inicial padrão para coisas não atribuídas
let nome = "Nicolas";
nome = undefined
console.log(nome); // "undefined"

