const path = require('path');
const write = require("./modules/writing");
const read = require("./modules/read-file");

const pathFile = path.resolve(__dirname, "pessoas.json");
const users = [
    {
        name: "John",
        password: "1235"
    },
    {
        name: "John Smith",
        password: "1235"
    },
    {
        name: "Clara",
        password: "1235"
    },
    {
        name: "Sofia",
        password: "1235"
    }
    ,
    {
        name: "Ana",
        password: "1235"
    }
    ,
    {
        name: "julia",
        password: "1235"
    }
    ,
    {
        name: "Roberto",
        password: "1235"
    }
    ,
    {
        name: "José",
        password: "1235"
    }
    ,
    {
        name: "Hugo",
        password: "1235"
    }
    ,
    {
        name: "Ralht",
        password: "1235"
    },
    {
        name: "Igor",
        password: "1235"
    }
    ,
    {
        name: "Sara",
        password: "1235"
    }
    ,
    {
        name: "Sofhie",
        password: "1235"
    }
];

write(pathFile, users);

const readFile = async (path) => {
    const data = await read(path);
    return data;
}

readFile(pathFile)
    .then(data => {
        const datas = JSON.parse(data);
        datas.forEach(data => console.log(data.name));

    })
    .catch(err => console.log(err.message));
