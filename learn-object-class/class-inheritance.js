class Person {
    
    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        log(`${this.name} diz oi`)
    }
}

class Student extends Person {

    constructor(name, id) {
        super(name);
        this.id = id;
    }

    sayHello() {
        super.sayHi();

        log(`${this.name} diz olá`) // sobrescrevendo o sayHi() da classe Person
    }
}

let person1 = new Student("Nicolas", 1);
person1.age = 28;

person1.sayHi();
person1.sayHello();

log(`${person1.name} tem ${person1.age} anos.`)
log(`Número de matrícula: #${person1.id}`)