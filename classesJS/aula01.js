class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    sayMayName() {
        return `My name is ${this.name} ${this.surname}`
    }
}

const PersonOne = new Person("Hiago", "Silva");
console.log(PersonOne)