// FIXME: try{} => tenta executar o código
// FIXME: catch{error} => é o que executa caso aja um error

const addSum = (numberOne, numberTwo) => {
    if(typeof numberOne !== 'number' || typeof numberTwo !== 'number') {
        throw new Error('Digite apenas números');
    }

    return numberOne + numberTwo;
}

try {
    console.log(addSum(2, 5));
} catch(error) {
    console.log('Alguma coisa mais amigável para o usuário');
}