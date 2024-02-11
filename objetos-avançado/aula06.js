// heranças
// produto => Camisa, Caneca
function Product(name, pricing) {
    this.name = name; // Propriedade name do produto
    this.pricing = pricing; // Propriedade pricing do produto
}
Product.prototype.incremento = function (incremento) {
    return this.pricing += incremento; // Incrementa o preço do produto
};
Product.prototype.decremento = function (decremento) {
    return this.pricing -= decremento; // Decrementa o preço do produto
};

// Definição da função construtora Camisa, que estende Product
function Camisa(name, pricing, cor) {
    Product.call(this, name, pricing); // Chama o construtor de Product
    this.cor = cor; // Adiciona a propriedade cor específica para Camisa
}

// Estabelece a herança de Product em Camisa
Camisa.prototype = Object.create(Product.prototype);

// Restaura o construtor de Camisa após a modificação do protótipo
Camisa.prototype.constructor = Camisa;

// Criação de uma instância de Camisa
const camisaOrigin = new Camisa("Camiseta", 100, "Rosa");
console.log(camisaOrigin);

// Definição da função construtora Caneca, que estende Product
function Caneca(name, pricing, material, stock) {
    Product.call(this, name, pricing); // Chama o construtor de Product
    this.material = material; // Adiciona a propriedade material específica para Caneca

    // Define a propriedade stock com getters e setters
    Object.defineProperty(this, "stock", {
        enumerable: true, // A propriedade é enumerável
        configurable: false, // A propriedade não pode ser reconfigurada
        get: function () { return stock }, // Getter para obter o valor de stock
        set: function (value) { // Setter para definir o valor de stock
            if (typeof value !== "number") throw TypeError("Typeof Value is Invalid");
            stock = value;
        }
    });
}

// Estabelece a herança de Product em Caneca
Caneca.prototype = Object.create(Product.prototype);

// Restaura o construtor de Caneca após a modificação do protótipo
Caneca.prototype.constructor = Caneca;

// Criação de uma instância de Caneca
const canecaOrigin = new Caneca("Programadores", 30, "Porcelana", 5);
console.log(canecaOrigin)

function Lapis(name, pricing, material, color) {
    Product.call(this, name, pricing);

    Object.defineProperty(this, "material", {
        enumerable: true,
        configurable: false,
        get: function () { return material },
        set: function (value) { return material = value },
    });

    Object.defineProperty(this, "color", {
        configurable: false,
        enumerable: true,
        get: function () { return color },
        set: function (value) { color = value }
    });
};

Lapis.prototype = Object.create(Product.prototype);
Lapis.prototype.constructor = Lapis;

const lapis = new Lapis("LapisFaber", 17, 'Madeira', 'Verde');
console.log(lapis)