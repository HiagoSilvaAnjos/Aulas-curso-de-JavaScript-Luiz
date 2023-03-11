// Reduce
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// TODO: Some todos os números
const sumNumbers = numbers.reduce((acumulador, valor) => { return acumulador += valor }, 0);
console.log(sumNumbers);

// TODO: Retorne um array com pares (filter)
const parNumber = numbers.filter(number => number % 2 === 0);
console.log(parNumber);

// TODO: Retorne um array com o dobro dos valores (map)
//                                Callback  
const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);

// TODO: Retorne a pessoa mais velha
const person = [
    { name: "Luiz", age: 62 },
    { name: "Maria", age: 23 },
    { name: "Ediardo", age: 55 },
    { name: "Letícia", age: 19 },
    { name: "Rosana", age: 70 },
    { name: "Walace", age: 47 }
];

const personOld = person.reduce((accumulator, value) => {
    if (accumulator.age > value.age) return accumulator;
    return value;
})

console.log(personOld)