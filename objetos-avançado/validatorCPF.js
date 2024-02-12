// TODO: Criar um validador de cpf com javascript
// Segue o algorítimo abaixo
// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (total soma % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (total soma % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

class validCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'clearCPF', {
            get: function () { return cpf.replace(/\D+/g, ''); }
        });
    }

    valid() {
        if (typeof this.clearCPF === 'undefined') return false;
        if (this.clearCPF.length !== 11) return false;
        if (this.isSequence()) return false;


        // Obtém o CPF sem os dois últimos dígitos  
        const CPFpart = this.clearCPF.slice(0, -2);
        // Cria o primeiro dígito verificador
        const digitCpfOne = this.createDigit(CPFpart);
        const digitCpfTwo = this.createDigit(CPFpart + digitCpfOne);

        const newCPF = CPFpart + digitCpfOne + digitCpfTwo;

        return newCPF === this.clearCPF;
    }

    isSequence() {
        const sequence = this.clearCPF[0].repeat(this.clearCPF.length);
        return sequence === this.clearCPF;
    }

    createDigit(part) {
        let cpfArray = Array.from(part);
        let regressive = cpfArray.length + 1;

        let total = cpfArray.reduce((ac, value) => {
            ac += (regressive * Number(value));
            regressive--;
            return ac;
        }, 0);

        const digit = 11 - (total % 11);
        return digit > 9 ? "0" : String(digit);
    }
}

const cpf = new validCPF('705.484.450-52');

if (cpf.valid('705.484.450-52')) {
    return console.log('Válido');
} else {
    return console.log('Inválido');
}