class validCPF {
    constructor(cpf) {
        this.clearCPF = cpf.replace(/\D+/g, "");
    }

    get valid() {
        if (!this.clearCPF) return false;
        if (this.clearCPF.length !== 11) return false;
        if (this.isSequence()) return false;

        const CPFpartial = this.clearCPF.slice(0, -2);
        const digitOne = this.createDigit(CPFpartial);
        const digitTwo = this.createDigit(CPFpartial + digitOne);

        const newCPF = CPFpartial + digitOne + digitTwo;
        return newCPF === this.clearCPF;
    }

    createDigit(CPFpartial) {
        const cpfArray = Array.from(CPFpartial);
        let regressive = cpfArray.length + 1;
        let total = cpfArray.reduce((ac, val) => {
            ac += (regressive * Number(val));
            regressive--;
            return ac;
        }, 0);

        const digit = 11 - (total % 11);
        return digit > 9 ? '0' : String(digit);
    }

    isSequence() {
        const sequence = this.clearCPF.charAt(0).repeat(this.clearCPF.length);
        return sequence === this.clearCPF
    }
}