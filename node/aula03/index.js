// FileSystem => fs
// Caminho => path

const fs = require("fs").promises;
const path = require("path");

fs.readdir(path.resolve("../"))
    .then((arrayFile) => {
        arrayFile.forEach(file => {
            console.log(file)
        })
    })
    .catch((error) => {
        console.log(error);
    })

console.log(`Caminho: ${__filename}`);
console.log(`Diretório: ${__dirname}`);