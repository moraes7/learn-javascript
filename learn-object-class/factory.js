class Person {
    age = 0;

    constructor(name) {
        this.name = name
    }

}

function createPerson(name, age) {
    let p = new Person(name);
    p.age = age;
    return p;
}

let p1 = createPerson("Nicolas", 28)

log(`${p1.name} tem ${p1.age} anos`)