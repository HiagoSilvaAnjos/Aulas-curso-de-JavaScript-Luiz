const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.status(200).send(`

    <form action='/' method='POST'>

    <label for='user'>Name</label>
    <input type="text" name="user" id="user">
    <br>
    <label for='age'>Age</label>    
    <input type="text" name="age" id="age">
    <br>
    <button>Enviar</button>

    </form>
    
    `)
})


app.get("/test/:id?/:parametros?", (req, res) => {

    console.log(req.params)

    // ?nome=Hiago&sobrenome=Silva&idade=19&githubProfile=github.com/HiagoSilvaAnjos
    console.log(req.query)
    res.status(200).send(`<a href="https://github.com/HiagoSilvaAnjos" target="_blank">${req.query.githubProfile}</a>`)
})

app.post("/", (req, res) => {
    console.log(req.body)

    res.status(200).send(`<h1>user: ${req.body.user} | ${req.body.age} anos</h1>`)
})

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));