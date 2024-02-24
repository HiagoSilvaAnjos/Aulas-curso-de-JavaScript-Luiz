// FileSystem => fs
// Caminho => path

const fs = require("fs").promises; // Importa o módulo 'fs' para manipulação de arquivos de forma assíncrona.
const path = require("path"); // Importa o módulo 'path' para manipulação de caminhos de arquivos.

// Lê o conteúdo do diretório pai do diretório atual de forma assíncrona.
fs.readdir(path.resolve("../"))
    .then((arrayFile) => { // Quando a leitura for concluída com sucesso, executa esta função de callback, recebendo um array com os nomes dos arquivos como parâmetro.
        arrayFile.forEach(file => { // Itera sobre cada nome de arquivo presente no diretório.
            console.log(file); // Exibe o nome do arquivo no console.
        });
    })
    .catch((error) => { // Captura erros que possam ocorrer durante a leitura do diretório.
        console.log(error); // Exibe o erro no console.
    });

// Exibe o caminho absoluto do arquivo atual.
console.log(`Caminho: ${__filename}`);
// Exibe o diretório atual.
console.log(`Diretório: ${__dirname}`);
