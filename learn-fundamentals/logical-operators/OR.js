// O operador “OR” é representado por dois símbolos de linha vertical
// OR lógico destina-se a manipular apenas valores booleanos. Se algum de seus argumentos for true, ele retorna true, caso contrário, retorna false.
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

// Na maioria das vezes, OR || é usado em uma instução if para testar se alguma das condições fornecidas é true.
let hour = 9;
if(hour < 10 || hour > 18 || isWeekend) {
    console.log("O escritório está fechado");
}

