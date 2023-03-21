const showResult = value => console.log(value);

function numberRamdom(min = 0, max = 3) {
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

async function start() {
    const DataBaseOne = await connectDataBase("Conectando ao banco de dados...", numberRamdom());
    showResult(DataBaseOne);

    const sever = await connectDataBase("Conectando ao sevidor...", numberRamdom());
    showResult(sever);

    const package = await connectDataBase("Instalando os pacotes...", numberRamdom());
    showResult(package);

    connectDataBase("Tudo Pronto!", numberRamdom())
        .then(value => showResult(value));
}
start();