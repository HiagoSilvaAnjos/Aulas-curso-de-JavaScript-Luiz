// Função para gerar um tempo aleatório dentro de um intervalo específico
function timer(min, max) {
    // Multiplica os valores mínimo e máximo por 1000 para converter em milissegundos
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

// Função que simula uma operação assíncrona para aguardar a resposta do banco de dados
function waitForDatabase(message, timeout) {
    // Retorna uma nova Promise com uma função de callback que recebe os argumentos resolve e reject
    return new Promise((resolve, reject) => {
        if (typeof message !== 'string') {
            return reject(new TypeError("the value type is invalid! please enter strings only"));
        }
        // Simula um atraso usando setTimeout e resolve a Promise após o tempo especificado
        setTimeout(() => {
            resolve(message);
        }, timeout);
    })
}

// Chamadas encadeadas da Promise para simular operações assíncronas com o banco de dados
waitForDatabase("Conectando ao banco de dados...", timer(1, 10))
    .then(message => {
        // Exibe a mensagem retornada após a conexão bem-sucedida
        console.log(message);
        // Chama a próxima Promise para obter dados do banco de dados
        return waitForDatabase("Obtendo dados do banco de dados...", timer(1, 10));
    })
    .then(message => {
        // Exibe a mensagem retornada após obter os dados
        console.log(message);
        // Chama a próxima Promise para processar os dados do banco de dados
        return waitForDatabase("Dados do banco de dados recebidos e processados...", timer(1, 10));
    })
    .then((message) => {
        // Exibe a mensagem após processar os dados
        console.log(message);
        // Exibe uma mensagem final
        console.log("Exibir resultado na tela");
    })
    .then(() => {
        // Exibe uma mensagem final de despedida
        console.log("Tenha um bom dia!");
    })
    .catch(error => {
        // Captura erros e exibe uma mensagem de erro
        console.log("Erro ao carregar:", error.message);
    })

// Mensagem exibida enquanto aguarda a resposta do banco de dados
console.log("Exibindo outras coisas enquanto o banco carrega...");
