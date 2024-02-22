class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    SayMyName() {
        return `My names is ${this.name} ${this.surname}`;
    }
}

module.exports = { Person };