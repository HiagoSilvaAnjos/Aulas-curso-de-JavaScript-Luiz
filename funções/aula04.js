// FIXME: Factory Function (Função fábrica)

function createFactoryPerson(name, email, password, height, weight) {
    return {
        name,
        email,
        password,
        height,
        weight,

        get imc() {
            const indexImc = this.weight / (this.height ** 2);
            return console.log(indexImc.toFixed(2));
        },

        set imc(value) {
            value = value.split(' ');
            this.height = Number(value[0]);
            this.weight = Number(value[1]);
        },

        get showNameCompleted() { return console.log(`Nome:${this.name} | Email:${this.email} | Senha:${this.password}`) },

        set showNameCompleted(value) {

            value = value.split(' ');

            this.name = value.shift();
            this.email = value[0];
            this.password = value[1];
        }

    };
}

const personOne = createFactoryPerson("Hiago", "H@mail.com", "123456", 1.80, 70);