function numberRamdom(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function connectDataBase(msg, timer) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') return reject(new Error('Typeof Value Invalid - use apenas valores do tipo string'));

        setTimeout(() => {
            resolve(msg);
        }, timer)
    })
}

connectDataBase('* Conectando ao banco de dados...', numberRamdom(1, 6))
    .then((msg) => {
        console.log(msg)
        console.log()
        return connectDataBase("* Buscando dados da BASE...", numberRamdom(1, 6))
    })
    .then((msg) => {
        console.log(msg)
        console.log()
        return connectDataBase("* Tratando os dados da BASE...", numberRamdom(1, 6))
    })
    .then((msg) => {
        console.log(msg)
        console.log()
    })
    .then(() => console.log("Exibir resultado na tela"))
    .catch(e => console.log(e));
