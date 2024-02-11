// FIXME: Constructor Functions
// Funções construtoras

class Person {
    constructor(name, age, email) {

        this.showName = () => {
            console.log(`Seu nome é ${this.name}`);
            console.log(`Você tem ${this.age} anos`);
            console.log(`Seu e-mail é ${this.email}`);
        };

        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const personOne = new Person('Hiago', 19, 'hiagozera@gmail.com');
personOne.showName();