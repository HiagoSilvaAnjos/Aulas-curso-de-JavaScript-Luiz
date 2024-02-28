const express = require("express");
const app = express();

//          CRIAR   LER  ATUALIZAR  DELETAR
// CRUD => CREATE, READ,  UPDATE,   DELETE
//          POST   GET    PUT     DELETE   

// www.meusite.com/ => GET => Entregue a página
// www.meusite.com/home => GET => Entregue a página /home
// www.meusite.com/users => GET => Entregue a página /users

app.get("/home", (req, res) => {
    res.status(200).send("<h1>Home Page!</h1>");
});

app.get("/users", (req, res) => {
    res.status(200).send("<h1>list Users</h1>");
})

app.get("/login", (req, res) => {
    res.status(200).send("<h1>sign in</h1>")
})

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));