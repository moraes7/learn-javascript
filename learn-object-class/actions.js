class Person {

    age = 0;
    steps = 0

    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    takeAStep() {
        this.steps++;
    }

    setAge(newAge) {
        if (typeof newAge == 'number' ) {
            this.age = newAge
        } else {
            log("Isso não é um número")
        }
    }
}

let person1 = new Person("Nicolas");
let person2 = new Person("Jose")
let person3 = new Person("Maria")

person1.takeAStep();
person1.takeAStep();

person1.setAge(28)

log(`Passos de ${person1.name}: ${person1.steps}`)
log(`${person1.name} tem ${person1.age} anos`)

