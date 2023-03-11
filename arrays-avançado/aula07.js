// Juntando tudo (Filter, Map e Reduce);
// Filtrar Pares 
// Dobrar os valores
// Reduzir (Somar tudo)
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numbersPair = numbers.filter(value => value % 2 === 0);
console.log(numbersPair);

const doubleNumbersPair = numbersPair.map(value => value * 2);
console.log(doubleNumbersPair);

const sumDoubleNumbersPair = doubleNumbersPair.reduce((accumulator, value) => accumulator + value);
console.log(sumDoubleNumbersPair);