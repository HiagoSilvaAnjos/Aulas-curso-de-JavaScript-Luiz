//                -4       -3      -2     -1
//                 0        1       2      3
const peaplo = ['Hiago', 'João', 'Igor', 'Luiz',];
console.log(`Antes: ${peaplo}`);

// peaplo.splice(indice atual, delete(elementos a remover), elem1, elem2, elem3);
const removePeaplo = peaplo.splice(2, 2, "Lucas", "Oliveira");
//                                        Remove o valor e adiciona outro no lugar
console.log(`Depois: ${peaplo}`);
console.log(`Removido: ${removePeaplo}`)