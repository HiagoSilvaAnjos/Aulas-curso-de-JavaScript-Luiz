const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require("./controllers/contactController");
const userController = require("./controllers/userController");

// rotas da page home
route.get("/", homeController.initialPage);
route.post("/", homeController.postPage);

// Rotas de contato
route.get("/contacts", contactController.initialPage);

// Rotas de usuários
route.get("/users", userController.initialPage)

module.exports = route;