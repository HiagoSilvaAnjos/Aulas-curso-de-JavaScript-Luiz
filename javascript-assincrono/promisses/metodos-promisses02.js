// FIXME: Promisse.race
/*
Promise.race é outro método fornecido pelo JavaScript para lidar com Promises, mas com um comportamento um pouco diferente do Promise.all. Enquanto o Promise.all espera por todas as Promises serem resolvidas ou rejeitadas, o Promise.race espera pela primeira Promise ser resolvida ou rejeitada.
*/

function timerRandom(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function conectDataBase(message, timer) {
    return new Promise((resolve, reject) => {

        if (typeof message !== 'string') {
            return reject(new TypeError('Message must be a string'))
        }

        setTimeout(() => {
            return resolve(message);
        }, timer);

    })
}

const promisses = [
    conectDataBase("API 01...", timerRandom(1, 6)),
    conectDataBase("API 02...", timerRandom(1, 6)),
    conectDataBase("API 03...", timerRandom(1, 6)),
]

Promise.race(promisses)
    .then(message => {
        console.log(message);
    })
    .catch(err => {
        console.log(err.message);
    })