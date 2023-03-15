// Factory Functions
const speak = {
    speak() {
        return console.log(`${this.name} está falando`);
    }
}
const eat = {
    eat() {
        return console.log(`${this.name} está comendo`);
    }
}
const drink = {
    drink() {
        return console.log(`${this.name} está bebendo`);
    }
}

const personPrototype = { ...speak, ...eat, ...drink };

function createPerson(name, surname) {
    return Object.create(personPrototype, {
        name: { value: name },
        surname: { value: surname },
    })
}

const personOne = createPerson('Hiago', 'Silva');
console.log(personOne)
