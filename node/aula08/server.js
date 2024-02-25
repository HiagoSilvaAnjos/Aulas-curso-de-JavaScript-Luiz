const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(routes);

const port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`success in: http://localhost:${port}`)
});