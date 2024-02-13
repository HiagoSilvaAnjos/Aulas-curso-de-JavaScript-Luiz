// 705.484.450-52 070.987.720-03
class ValidCPF {
    constructor(cpf) {
        this.clearCPF = cpf.replace(/\D+/g, "");
    }

    valid() {
        // Verifica se o CPF limpo foi definido 
        if (typeof this.clearCPF === "undefined") return false;
        // Verifica se o CPF possui 11 dígitos
        if (this.clearCPF.length !== 11) return false;
        // Verifica se o CPF é uma sequência de números repetidos (inválido)
        if (this.isSequence()) return false;

        // Obtém o CPF sem os dois últimos dígitos
        const partCPF = this.clearCPF.slice(0, -2);
        // Cria o primeiro dígito verificador
        const digitOne = this.createDigit(partCPF);
        // Cria o segundo dígito verificador
        const digitTwo = this.createDigit(partCPF + digitOne);
        // Junta os dígitos gerados com os dígitos do CPF original
        const newCPF = partCPF + digitOne + digitTwo;
        // Verifica se o CPF gerado é igual ao CPF original
        return newCPF === this.clearCPF;
    }

    createDigit(partCPF) {
        // Converte o CPF parcial para um array
        const arrayCPF = Array.from(partCPF);
        // Inicia o fator regressivo para o cálculo do dígito
        let regressive = arrayCPF.length + 1;
        // Calcula a soma ponderada dos dígitos do CPF parcial
        let totalSum = arrayCPF.reduce((acumulator, value) => {
            acumulator += (regressive * Number(value));
            regressive--;
            return acumulator;
        }, 0);
        // Calcula o dígito verificador
        const digit = 11 - (totalSum % 11);
        // Se o dígito for maior que 9, retorna '0', senão retorna o próprio dígito
        return digit > 9 ? "0" : String(digit);
    }

    isSequence() {
        // Cria uma sequência com o primeiro dígito do CPF repetido
        const sequence = this.clearCPF[0].repeat(this.clearCPF.length);
        // Verifica se a sequência é igual ao CPF limpo
        return sequence === this.clearCPF;
    }

}

const cpf = new ValidCPF("705.484.450-52");
if (cpf.valid()) return console.log("CPF é válido");
if (!cpf.valid()) return console.log("CPF é inválido");