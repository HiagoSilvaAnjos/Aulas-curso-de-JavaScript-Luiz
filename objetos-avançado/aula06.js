// heranças
// produto => Camisa, Caneca
function Product(name, pricing) {
    this.name = name;
    this.pricing = pricing;
}
Product.prototype.incremento = function (incremento) { return this.pricing += incremento };
Product.prototype.decremento = function (decremento) { return this.pricing -= decremento };

function Camisa(name, pricing, cor) {
    Product.call(this, name, pricing);
    this.cor = cor;
}
Camisa.prototype = Object.create(Product.prototype);
Camisa.prototype.constructor = Camisa;

const camisaOrigin = new Camisa("Camiseta", 100, "Rosa");
console.log(camisaOrigin);

function Caneca(name, pricing, material, stock) {
    Product.call(this, name, pricing);
    this.material = material;

    Object.defineProperty(this, "stock", {
        enumerable: true,
        configurable: false,
        get: function () { return stock },
        set: function (value) {
            if (typeof value !== "number") throw TypeError("Typeof Value is Invalid");
            this.stock = value;
        }
    })

}
Caneca.prototype = Object.create(Product.prototype);
Caneca.prototype.constructor = Caneca;

const canecaOrigin = new Caneca("Programadores", 30, "Porcelana", 5);
console.log(canecaOrigin.stock);