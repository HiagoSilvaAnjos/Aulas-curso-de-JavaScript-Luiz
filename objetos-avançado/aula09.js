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

const myMap = new Map();
myMap.set("Name", "Hiago");
myMap.set("Surname", "Silva");

for (const [key, value] of myMap.entries()) {
    console.log(key, value);
}