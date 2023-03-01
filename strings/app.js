// Utilizamos a barra ivertida para escapar algum caracter

let umaString = "Olá, \"Mundo\"";
console.log(umaString);

/* 
O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
*/
const names = ["Igor", "maria", "Luiz"];

if (names.indexOf("lucas") === -1) {
    names.push("lucas");
    console.log(names)
} else {
    console.log("Esse nome já existe")
}

/*
O método lastIndexOf() retorna o índice da última ocorrência do valor especificado encontrado na String. Quando fromIndex é especificado, a pesquisa é realizada de trás para frente. Retorna -1 se o valor não for encontrado.
*/

const carros = ["fiat", "ferrari", "tesla"];
console.log(carros.lastIndexOf('fiat')); 


/*
O método replace() retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres). O padrão pode ser uma string ou uma RegExp, e a substituição pode ser uma string ou uma função a ser chamada para cada correspondência. Se o padrão for uma string, apenas a primeira ocorrência será substituída.

A string original não é modificada.
*/

let umTexto = "O rato roeu a roupa do rei de roma";
let corte = umTexto.replace(/r/g, "p")

console.log(corte)
console.log(umTexto)


let t = "Hiago da silva dos Anjos";

let palavras = t.split(" ");



console.log(t)
console.log(t.split(" "))
for (let i of palavras) {
    console.log(i)
}
console.log(t.slice(0, 5))
console.log(t.indexOf("s"))
console.log(t.replace("Hiago", "Igor"))