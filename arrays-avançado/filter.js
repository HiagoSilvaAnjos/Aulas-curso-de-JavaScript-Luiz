// FIXME: filter => Sempre retorna um array com a mesma quantidade de elementos ou menos

// TODO: Retorne os números maiores que 10;
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Primeira Maneira
const validateNumber = number => number > 10;

// Segunda Maneira
function validateNumberTwo(number) { return number > 10; }

//                                           function callback (Terceira Maneira)
const numbersGreaterThanTen = numbers.filter(number => number > 10);
console.log(numbersGreaterThanTen);

// TODO: Retorne as pessoas que possuem o nome com 5 letras ou mais
// TODO: Retorne as pessoas que possuem mais de 50 anos
// TODO: Retorne as pessoas cujo nome termina com "a";

const person = [
    { name: "Luiz", age: 62 },
    { name: "Maria", age: 23 },
    { name: "Ediardo", age: 55 },
    { name: "Letícia", age: 19 },
    { name: "Rosana", age: 32 },
    { name: "Walace", age: 47 }
];

const personNameLength = person.filter(person => person.name.length > 5);
console.log(personNameLength);

const personAgeLength = person.filter(person => person.age > 50)
console.log(personAgeLength);

const personNameEnd = person.filter(person => person.name.toLowerCase().endsWith("a"));
console.log(personNameEnd);