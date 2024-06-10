class Person {

    static age = 28;

    constructor(name) {
        this.name = name;
    }

  
}

let person1 = new Person("Nicolas")

log(`Meu nome é ${person1.name} e tenho ${Person.age} anos.`)

