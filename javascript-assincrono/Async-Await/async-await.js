function timer(min = 1000, max = 6000) {
    return Math.floor(Math.random() * (max - min) + min);
}

function conectDatabase(messege, timer) {
    return new Promise((resolve, reject) => {

        if (typeof messege !== "string") {
            return reject(new Error("The insirt value must be a string!"))
        }

        setTimeout(() => {
            return resolve(messege);
        }, timer)

    })
}

async function promisses() {

    try {

        const promiseOne = await conectDatabase("Conectando a base de dados...", timer());
        console.log(promiseOne)

        const promiseTwo = await conectDatabase("Recebendo informações...", timer());
        console.log(promiseTwo)

        const promiseTree = await conectDatabase("Tratando informações...", timer());
        console.log(promiseTree)

        const promiseFor = await conectDatabase("Informações do banco de dados recebidas e tratadas...", timer());
        console.log(promiseFor)

        console.log("Tudo certo");

    }
    catch (error) {
        const err = error;
        console.log(error.message)
    }

}

promisses()