// FIXME: Factory Function (Função fábrica)
const createPeaple = (firstName, lastName, weight, height) => {
    return {
        firstName,
        lastName,
        
        // Getter                                            
        get sumDate() {
            return `Olá ${this.firstName} ${this.lastName}`
        },

        weight,
        height,
        // Getter

        get imc() {
            const index = this.weight / (this.height ** 2);
            return index.toFixed(2);
        }
    }
}

const onePeaple = createPeaple("Hiago", "Silva", 60, 1.7);
console.log(onePeaple.sumDate);
console.log(onePeaple.imc);