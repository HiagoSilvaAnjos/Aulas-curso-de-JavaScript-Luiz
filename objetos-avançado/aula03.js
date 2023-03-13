// defineProperty - Getter e Setters
class Product {
    constructor(name, precing, stock) {

        this.name = name;
        this.precing = precing;

        Object.defineProperty(this, "stock", {
            enumerable: true, // Mostra a chave
            configurable: false, // Configuravel
            get: () => stock,
            set: (value) => {
                if (typeof value !== "number") throw new TypeError("Typeof Invalid");

                stock = value;
            }
        })

    }
}

const productOne = new Product("Camiseta", 30, 100);
const productTwo = new Product("Short", 20, 50);

// Valor alterado com sucesso
productOne.stock = 300;
console.log(productOne.stock);

// Error
productTwo.stock = '100';
console.log(productTwo.stock);