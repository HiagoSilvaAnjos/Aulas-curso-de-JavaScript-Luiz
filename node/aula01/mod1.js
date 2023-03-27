class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get sayMayName() { return `My name is ${this.name} ${this.surname}` };
}
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get sayMayNameAnimal() { return `My name is ${this.name} my age is ${this.age} years` };
}

module.exports = { Person, Animal };