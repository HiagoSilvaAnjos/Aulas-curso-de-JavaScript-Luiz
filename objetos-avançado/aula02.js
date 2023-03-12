// defineProperty - defineProperties
class Product {
    constructor(name, precing, stock) {

        Object.defineProperties(this, {
            name: {
                enumerable: true, // Mostra a chave
                value: name, // valor
                writable: false, // Controla se o valor pode ser alterado
                configurable: false // Configuravel
            },
            precing: {
                enumerable: true, // Mostra a chave
                value: precing, // valor
                writable: false, // Controla se o valor pode ser alterado
                configurable: false // Configuravel
            },
        })

        Object.defineProperty(this, "stock", {
            enumerable: false, // Mostra a chave
            value: stock, // valor
            writable: false, // Controla se o valor pode ser alterado
            configurable: false // Configuravel
        })

    }
}

const productOne = new Product("Camiseta", 30, 100);
const productTwo = new Product("Short", 20, 50);
console.log(productOne)
console.log(productTwo)