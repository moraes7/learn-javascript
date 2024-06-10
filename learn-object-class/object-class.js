class Person {

    age = 0;

    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}

let person1 = new Person("Nicolas");
let person2 = new Person("Jose")
let person3 = new Person("Maria")

person1.age = 28;

log(`Person 1: ${person1.name} tem ${person1.age}`)
log(`Person 2: ${person2.name} tem ${person2.age} anos`)
log(`Person3: ${person3.name} tem ${person3.age} anos`)