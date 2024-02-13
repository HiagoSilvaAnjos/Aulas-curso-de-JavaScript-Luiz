// Definição de um símbolo para a propriedade de velocidade
const _velocity = Symbol("Velocity");

class Car {
    constructor(name) {
        this.name = name;
        this[_velocity] = 0;
    }

    speedUp() {
        // Verifica se a velocidade não ultrapassa o limite máximo
        if (this[_velocity] >= 100) return console.log('Máximo atingido');
        return this[_velocity]++;
    }

    reduceSpeed() {
        // Verifica se o carro já está parado
        if (this[_velocity] <= 0) return console.log("Veículo já está parado");
        return this[_velocity]--;
    }

    get velocity() {
        return this[_velocity];
    }

    set velocity(value) {
        // Verifica se o valor da velocidade está dentro dos limites válidos
        if (value >= 100 || value <= 0) return console.log("Velocidade inválida");
        return this[_velocity] = value;
    }

    // Getter para retornar uma frase descrevendo o carro
    get sayMyCar() {
        return `My car is ${this.name}`;
    }
}

const car = new Car("Toyota");

// Aumentando a velocidade do carro até o máximo (100)
for (let i = 0; i < 100; i++) car.speedUp();

console.log(car);