exports.initialPage = (req, res) => {

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
}

exports.postPage = (req, res) => {
    console.log(req.body)
    res.status(200).send(`<h1>user: ${req.body.user} | ${req.body.age} anos</h1>`)
}