const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");

const pathViews = path.resolve(__dirname, "src", "views");

app.use(express.urlencoded({ extended: true }));

app.set("views", pathViews);
app.set("view engine", "ejs")

app.use(routes);

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`success in: http://localhost:${port}`)
});
