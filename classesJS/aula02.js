const registeredCars = [];
const _velocity = Symbol("Velocity");
class Car {
    constructor(name, value, placa) {
        this.name = name;
        this.value = value;
        this.placa = placa;
        this[_velocity] = 0;
    }

    set spead(spead) {
        if (typeof spead !== "number") return;
        if (spead <= 0 || spead > 100) return;
        this[_velocity] = spead;
    }

    get spead() { return this[_velocity]; }

    reduceSpeed(spead) {
        if (spead <= 0 || spead > 100) return;
        return this[_velocity] -= spead;
    }

    increaseSpeed(spead) {
        if (spead > 100) return;
        return this[_velocity] = spead;
    }


    get addCar() {
        return registeredCars.push(this)
    }
}


const carro = new Car("Sivic", 20000, "XXHDS");
const carro2 = new Car("Honda", 10000, "XJKLDS");
carro.addCar;
carro2.addCar;