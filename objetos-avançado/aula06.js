// heranças
// produto => Camisa, Caneca
function Product(name, pricing) {
    this.name = name;
    this.pricing = pricing;
}
Product.prototype.incremento = function (incremento) { return this.pricing += incremento };
Product.prototype.decremento = function (decremento) { return this.pricing -= decremento };

function Camisa(name, pricing) {
    Product.call(this, name, pricing);
}
Camisa.prototype = Object.create(Product.prototype);
Camisa.prototype.constructor = Camisa;

const camisaOrigin = new Camisa("Camiseta", 100)
console.log(camisaOrigin);

function Caneca(name, pricing) {
    Product.call(this, name, pricing)
}
Caneca.prototype = Object.create(Product.prototype);
Caneca.prototype.constructor = Caneca;

const canecaOrigin = new Caneca("Porcelana", 30);
console.log(canecaOrigin);