// new Object => Object.prototype
const objectValueA = {
    keyValueA: "A",
    // _proto_: Object.prototype
}

const objectValueB = {
    keyValueB: "B",
    // _proto_: objectValueA
}

const objectValueC = {
    keyValueC: "C",
    // _proto_: objectValueB
}

Object.setPrototypeOf(objectValueB, objectValueA);
Object.setPrototypeOf(objectValueC, objectValueB);

class Product {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

Product.prototype.desc = function (percentage) {
    if (typeof percentage !== 'number') throw TypeError("Typeof value invalid");

    this.value = this.value - (this.value * (percentage / 100));
    return this;
};

Product.prototype.increase = function (percentage) {
    if (typeof percentage !== 'number') throw TypeError("Typeof value invalid");

    this.value = this.value + (this.value * (percentage / 100));
    return this;
};

const productOne = new Product("Camisa", 100);
console.log(productOne.desc(10).value)
console.log(productOne.increase(10).value)