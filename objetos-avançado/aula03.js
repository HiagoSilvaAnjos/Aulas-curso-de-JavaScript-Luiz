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
                return stock = value;
            }
        })

    }
}

// FIXME: produto 1

const productOne = new Product("Camiseta", 30, 100);

// Valor alterado com sucesso
try {
    console.log(productOne.stock = 123);
} catch (error) {
    const tratamentError = error;
    console.log("Tipo de dado inválido...");
} finally {
    console.log("Bom dia");
}

// //  FIXME: produto 2
const productTwo = new Product("Short", 20, 50);

// Valor alterado com error
try {
    console.log(productTwo.stock = "500");
} catch (error) {
    const tratamentError = error;
    console.log("Tipo de dado inválido...");
} finally {
    console.log("Bom dia");
}