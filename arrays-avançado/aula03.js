const numbersOne = [0, 1, 2];
const numbersTwo = [3, 4, 5];
// Spread Operator
const concat = [...numbersOne, ...numbersTwo];
console.log(concat);

// ################################################

const namesOne = ['Hiago', 'John', 'Luiz'];
const namesTwo = ['Igor', 'Maria'];
// Método Concat
const concatNames = namesOne.concat(namesTwo, ['Gustavo']);
console.log(concatNames);