// As funções são os principais “blocos de construção” do programa. Eles permitem que o código seja chamado muitas vezes sem repetição.
function message() {
    console.log("Hello World");
}

message();
message();

// Variáveis locais
// Uma variável declarada dentro de uma função só é visível dentro dessa função.
function showMessage(){
    let message = "Hellooo World"
    console.log(message);
}

showMessage(); // mostra a mensagem
console.log(message); // Error!

// Variáveis externas
// Uma função também pode acessar uma variável externa
let name = "Nicolas";

function sayHello(){
    let msg = "Hello," + name
    console.log(msg);
}

sayHello(); // Hello, Nicolas

// A função tem acesso total à variável externa. Ela também pode modificá-la.
let userName = "Nicolas"
function sayHelloAgain() {
    userName = "John"; // alterou a variável

    let msg2 = "Hello," + userName
    console.log(msg2);
}

console.log(userName); // "Nicolas" antes da chamada da função

sayHelloAgain(); // "John" depois de chamar a função

console.log(userName); // "John" o valor foi alterado pela função

// A variável externa só é usada se não houver uma variável local.
// Se uma variável com o mesmo nome for declarada dentro da função, ela ignora a externa.
