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

function Product(name, value) {
    this.name = name;
    this.value = value;
}

const calcDesc = function (percentage) {
    if (typeof percentage !== 'number') throw TypeError("Typeof value invalid");
    const producCopy = { ...this };
    producCopy.value = producCopy.value - (producCopy.value * (percentage / 100));
    return producCopy;
}

const increasePrice = function (percentage) {
    if (typeof percentage !== 'number') throw TypeError("Typeof value invalid");
    const producCopy = { ...this };
    producCopy.value = producCopy.value + (producCopy.value * (percentage / 100));
    return producCopy;
}

Product.prototype.Desc = calcDesc;
Product.prototype.increase = increasePrice;

const productOne = new Product("Camisa", 100);
console.log(productOne);