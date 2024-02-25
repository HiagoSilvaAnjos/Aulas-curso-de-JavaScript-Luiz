const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require("./controllers/contactController");

// rotas da page home
route.get("/", homeController.initialPage);
route.post("/", homeController.postPage);

// Rotas de contato
route.get("/contacts", contactController.initialPage);

module.exports = route;