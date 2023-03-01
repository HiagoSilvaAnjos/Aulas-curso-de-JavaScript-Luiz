// TODO: Escrava uma função que recebe um número e
// retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número Não é divisivel por 3 e 5 = retorna o proprio número
// Checar se o número é realmente um número
// Use a função com númerors de 0 a 100

const verificacionNumber = (number) => {
    if(typeof number !== 'number') return 'Não é um número';

    if(number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    if(number % 3 === 0) return 'Fizz';
    if(number % 5 === 0) return 'Buzz';
    if(number % 3 !== 0 && number % 5 !== 0) return number;

}

let numberTurn = 0;

while (numberTurn <= 100) {
    console.log(numberTurn, verificacionNumber(numberTurn));
    numberTurn++;
}
