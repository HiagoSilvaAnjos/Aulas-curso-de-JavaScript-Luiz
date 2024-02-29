require('dotenv').config();

const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
const { myMiddlewareGlobal } = require("./src/middlewares/middleware");

const connectToDatabase = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@clusterdatabase.ldhdmfi.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDataBase`;

mongoose.connect(connectToDatabase)
    .then(() => {
        console.log("Success in database");
        app.emit("success");
    }).catch((err) => {
        console.log(`Insucces in database: ${err.message}`);
    });

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const pathViews = path.resolve(__dirname, "src", "views");
const pathPublic = path.resolve(__dirname, "public");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(pathPublic));

const sessionOptions = session({
    secret: "jkghdskfuyrgaçshgaishdrahsdg ()",
    store: MongoStore.create({ mongoUrl: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@clusterdatabase.ldhdmfi.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDataBase` }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    }
})

app.use(sessionOptions);
app.use(flash());

// Nossos próprios middlewares
app.use(myMiddlewareGlobal)

app.set("views", pathViews);
app.set("view engine", "ejs")

app.use(routes);

const port = 3000;

app.on("success", () => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
        console.log(`success in: http://localhost:${port}`)
    });
})