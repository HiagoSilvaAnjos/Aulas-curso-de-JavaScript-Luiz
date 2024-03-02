const { Person } = require("./module01");
const axios = require("axios");

const user = new Person("Hiago", "Silva");

console.log(user.SayMyName());

axios("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then((response) => {
        console.log(response.data.results);
        response.data.results.forEach(item => console.log(item.name));
    }).catch((err) => {
        console.log("Error ao buscar");
    });