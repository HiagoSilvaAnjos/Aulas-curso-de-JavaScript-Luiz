// 705.484.450-52 070.987.720-03
function validCPF(cpf) {
    Object.defineProperty(this, "clearCPF", {
        enumerable: true,
        get: function () {
            return cpf.replace(/\D+/g, '')
        }
    })
}

validCPF.prototype.valid = function () {
    if (typeof this.clearCPF === 'undefined') return false;
    if (this.clearCPF.length !== 11) return false;
    if (this.isSequence()) return false;

    const CPFpartial = this.clearCPF.slice(0, -2);
    const digitOne = this.createDigit(CPFpartial);
    const digitTwo = this.createDigit(CPFpartial + digitOne);

    const newCPF = CPFpartial + digitOne + digitTwo;
    return newCPF === this.clearCPF;
}

validCPF.prototype.createDigit = function (CPFpartial) {
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

validCPF.prototype.isSequence = function () {
    const sequence = this.clearCPF[0].repeat(this.clearCPF.length);
    return sequence === this.clearCPF
}

const cpf = new validCPF('705.484.450-52');
if (cpf.valid()) return console.log("Válido");
if (!cpf.valid()) return console.log("Inválido");   