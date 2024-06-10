class Person {

    _age = 0;

    constructor(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
    }

    get fullName() {
        return `${this.FirstName} ${this.LastName}`
    }

    get age() {
        return this._age
    }

    set age(a) {
        if (typeof a == 'number') {
            this._age = a
        } else {
            log("Isso não é um número")
        }
        this._age = a;
    }
}

let person1 = new Person("Nicolas", "Moraes")

person1.age = 28
log(`${person1.fullName} tem ${person1.age} anos`)
