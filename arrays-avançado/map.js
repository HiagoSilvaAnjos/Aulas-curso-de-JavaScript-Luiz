// MAP array
// TODO: Dobre os números
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//                                Callback  
const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);

// TODO: Retorne apenas uma strng com o nome da pessoa
// TODO: Remova apenas a chave nome do objeto
// TODO: Adicione uma chave id em cada objeto

const person = [
    { name: "Luiz", age: 62 },
    { name: "Maria", age: 23 },
    { name: "Ediardo", age: 55 },
    { name: "Letícia", age: 19 },
    { name: "Rosana", age: 32 },
    { name: "Walace", age: 47 }
];

const namePerson = person.map(person => person.name);
console.log(namePerson);

const removeNamePerson = person.map(person => ({ age: person.age }));
console.log(removeNamePerson);

const addIdPerson = person.map((person) => {
    const newObject = { ...person };
    newObject.id = randomNumber();
    return newObject;
});
console.log(addIdPerson);

function randomNumber() {
    return Math.floor(Math.random() * (100 - 1));
}

console.log(person)