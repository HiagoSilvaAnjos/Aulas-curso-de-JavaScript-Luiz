// FIXME: PROTOTYPES
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

// Adiciona um método 'sayMyName' ao protótipo da classe Person
Person.prototype.sayMyName = function () {
    return `My name is ${this.name} ${this.surname}`
};

// Criação de duas instâncias da classe Person
const personOne = new Person("Hiago", "Silva");
const personTwo = new Person("Luiz", "Otávio");

console.dir(personOne);
console.dir(personTwo);
