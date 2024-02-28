const path = require('path');
const write = require("./modules/writing");
const read = require("./modules/read-file");

const pathFile = path.resolve(__dirname, "pessoas.json");
// const users = [
//     {
//         name: "John",
//         password: "1235"
//     },
//     {
//         name: "John Smith",
//         password: "1235"
//     },
//     {
//         name: "Clara",
//         password: "1235"
//     },
//     {
//         name: "Sofia",
//         password: "1235"
//     }
//     ,
//     {
//         name: "Sofia",
//         password: "1235"
//     }
//     ,
//     {
//         name: "Sofia",
//         password: "1235"
//     }
//     ,
//     {
//         name: "Sofia",
//         password: "1235"
//     }
//     ,
//     {
//         name: "Sofia",
//         password: "1235"
//     }
//     ,
//     {
//         name: "Sofia",
//         password: "1235"
//     }
//     ,
//     {
//         name: "Sofia",
//         password: "1235"
//     },
//     {
//         name: "Sofia",
//         password: "1235"
//     }
//     ,
//     {
//         name: "Sofia",
//         password: "1235"
//     }
//     ,
//     {
//         name: "Sofia",
//         password: "1235"
//     }
// ];

// write(pathFile, users);
const readFile = async (path) => {
    const data = await read(path);
    return data;
}
readFile(pathFile)
    .then(data => {
        const datas = JSON.parse(data);

        datas.forEach(data => console.log(data));

    })
    .catch(err => console.log(err.message));