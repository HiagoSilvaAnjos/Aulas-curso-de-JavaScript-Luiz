// FIXME: Promisse.resolve - Promisse.reject
/*
Promise.resolve é usado para criar Promises resolvidas com um valor específico, enquanto Promise.reject é usado para criar Promises rejeitadas com um motivo específico (geralmente um objeto de erro). Ambos são úteis em situações onde você precisa criar Promises de forma programática com estados de resolução ou rejeição predefinidos.
*/

function timer(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


function loadPage(message, timer) {
    return new Promise((resolve, reject) => {

        if (typeof message !== 'string') {
            return reject(new Error('Message must be a string'));
        }

        setTimeout(() => {
            return resolve(message);
        }, timer)

    })
}

const response = () => {
    const numberResponse = timer(1, 2);

    return numberResponse > 1 ? true : false;
}

function dowloadPage(bollean) {

    console.log(bollean)

    if (typeof bollean !== 'boolean') {
        return Promise.reject(new Error('Value must be a boolean'));
    }

    return bollean ? Promise.resolve("Página já em cache!") : loadPage("Carregando nova página...", timer(1000, 6000));
}

dowloadPage(response())
    .then(message => {
        console.log(message);
        return Promise.resolve("Página carregada!");
    })
    .then((message) => {
        return console.log(message);
    })
    .catch(error => {
        console.log(error.message);
    })