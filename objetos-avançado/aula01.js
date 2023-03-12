// Revisando objetos
// Constructor Functions
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sayMyName = () => `${this.name} ${this.surname} Age: ${this.age}`;
}

const personOne = new Person("Hiago", "Silva", 18);
const personTwo = new Person("Igor", "Oliveira", 40);
const personTree = new Person("Luiz", "Otávio", 44);

console.log(personOne.sayMyName());
console.log(personTwo.sayMyName());
console.log(personTree.sayMyName());