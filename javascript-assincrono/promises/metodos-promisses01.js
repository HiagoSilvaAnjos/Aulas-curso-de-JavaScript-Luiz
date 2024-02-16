// FIXME: Promisse.all
/*
Promise.all é um método útil fornecido pelo JavaScript para lidar com várias Promises de uma só vez. Ele recebe um array de Promises como argumento e retorna uma nova Promise que é resolvida somente quando todas as Promises no array são resolvidas ou rejeitadas.
*/

function timerRandom(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function conectDataBase(message, timeout) {
    return new Promise((resolve, reject) => {

        if (typeof message !== 'string') {
            return reject(new TypeError("the value type is invalid! please enter strings only"))
        }

        setTimeout(() => {
            return resolve(message);
        }, timeout);
    })
}

const promisses = [
    'Outras tarefa',
    conectDataBase("Esperando API 01...", timerRandom(1, 6)),
    conectDataBase("Esperando API 02...", timerRandom(1, 6)),
    conectDataBase("Esperando API 03...", timerRandom(1, 6)),
    "Mais outra tarefa",
]

Promise.all(promisses)
    .then(message => {
        message.forEach(element => console.log(element))
        return conectDataBase("Conectando...", timerRandom(1, 6))
    })
    .then(message => {
        console.log(message);
    })
    .catch(err => {
        const error = err.message;
        console.log(error);
    })