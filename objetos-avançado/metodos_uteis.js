/* 
Object.values
Object.entries
Object.assing(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)


FIXME: Já vimos
Object.keys (Mostra as chaves)
Object.freeze (Conjela o objeto)
Object.defineProperty (Define uma propriedade)
Object.defineProperties (Define varias propriedades)
*/

const product = { name: "pen", price: 1.99, stock: 200 };

const property = Object.entries(product);

property.forEach(element => {
    console.log(element[0], element[1]);
})

const copyProduct = { ...product };

delete copyProduct.name;

console.log(product);
console.log(copyProduct);