const showResult = value => console.log(value);

function timerRandom(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function conectDataBase(msg, timer) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') return reject(new Error('Typeof Value Invalid'));
        setTimeout(() => { resolve(msg.toUpperCase()) }, timer);
    });
}

// FIXME: Promisse.all - Promisse.race - Promisse.resolve - Promisse.reject

// TODO: Promisse.all
const promisesAll = [
    'primeiro valor',
    conectDataBase("Banco 1", timerRandom(1, 3)),
    conectDataBase("Banco 2", timerRandom(1, 3)),
    conectDataBase("Banco 3", timerRandom(1, 3)),
    'outro valor'
];

Promise.all(promisesAll)
    .then((value) => {
        for (let i of value) {
            showResult(i);
        }
    })
    .catch(err => showResult(err));



//TODO: Promise.race
const promisesRace = [
    conectDataBase("Banco 1", timerRandom(1, 3)),
    conectDataBase("Banco 2", timerRandom(1, 3)),
    conectDataBase("Banco 3", timerRandom(1, 3)),
];

Promise.race(promisesRace)
    .then(value => {
        showResult(value);
        showResult('======================================');
    })
    .catch(err => showResult(err))

// TODO: Promise.resolve
function downloadPage() {
    const download = true;

    if (download) return Promise.resolve("Página em cache!");
    if (!download) return conectDataBase("Baixando página...", timerRandom(1, 3));
}

downloadPage()
    .then(value => showResult(value))
    .catch(e => showResult(e));