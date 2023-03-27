const moduleConfig = require('./mod1');

const personOne = new moduleConfig.Person("Hiago", "Silva");
console.log(personOne.sayMayName);

const AnimalOne = new moduleConfig.Animal("Nick", 9);
console.log(AnimalOne.sayMayNameAnimal);

const axios = require('axios');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(err => console.log("Deu ruim"));
