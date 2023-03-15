const pessoas = [
    { id: 3, firstName: 'Hiago' },
    { id: 2, firstName: 'Luiz' },
    { id: 1, firstName: 'Otávio' },
]

const newpessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    newpessoas.set(id, { ...pessoa })
}
// console.log(newpessoas)

const myMap = new Map();
myMap.set("Name", "Hiago");
myMap.set("Surname", "Silva");

for (const [Name, Surname] of myMap) {
    console.log(Name, Surname)
}