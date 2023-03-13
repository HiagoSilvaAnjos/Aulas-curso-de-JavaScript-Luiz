// Construtora => molde (classe)
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
};

Person.prototype.sayMayName = function () {
    return `May name is ${this.name} ${this.surname}`
}

// Instância
const personOne = new Person("Hiago", "Silva"); // <== pessoa =  função construtora 
const personTwo = new Person("Luiz", "Otávio"); // <== pessoa =  função construtora 

console.dir(personOne);
console.dir(personTwo);
