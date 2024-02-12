// Definindo a constructor function validCPF para validar CPFs
function validCPF(cpf) {
    // Definindo uma propriedade para armazenar o CPF limpo
    Object.defineProperty(this, "clearCPF", {
        enumerable: true,
        get: function () {
            // Remove todos os caracteres não numéricos do CPF
            return cpf.replace(/\D+/g, '')
        }
    })
}

// Método prototipado para validar o CPF
validCPF.prototype.valid = function () {
    // Verifica se o CPF limpo foi definido
    if (typeof this.clearCPF === 'undefined') return false;
    // Verifica se o CPF possui 11 dígitos
    if (this.clearCPF.length !== 11) return false;
    // Verifica se o CPF é uma sequência de números repetidos (inválido)
    if (this.isSequence()) return false;

    // Obtém o CPF sem os dois últimos dígitos
    const CPFpartial = this.clearCPF.slice(0, -2);
    // Cria o primeiro dígito verificador
    const digitOne = this.createDigit(CPFpartial);
    // Cria o segundo dígito verificador
    const digitTwo = this.createDigit(CPFpartial + digitOne);

    // Junta os dígitos gerados com os dígitos do CPF original
    const newCPF = CPFpartial + digitOne + digitTwo;
    // Verifica se o CPF gerado é igual ao CPF original
    return newCPF === this.clearCPF;
}

// Método prototipado para criar um dígito verificador
validCPF.prototype.createDigit = function (CPFpartial) {
    // Converte o CPF parcial para um array
    const cpfArray = Array.from(CPFpartial);
    // Inicia o fator regressivo para o cálculo do dígito
    let regressive = cpfArray.length + 1;
    // Calcula a soma ponderada dos dígitos do CPF parcial
    let total = cpfArray.reduce((ac, val) => {
        ac += (regressive * Number(val));
        regressive--;
        return ac;
    }, 0);

    // Calcula o dígito verificador
    const digit = 11 - (total % 11);
    // Se o dígito for maior que 9, retorna '0', senão retorna o próprio dígito
    return digit > 9 ? '0' : String(digit);
}

// Método prototipado para verificar se o CPF é uma sequência de números repetidos
validCPF.prototype.isSequence = function () {
    // Cria uma sequência com o primeiro dígito do CPF repetido
    const sequence = this.clearCPF[0].repeat(this.clearCPF.length);
    // Verifica se a sequência é igual ao CPF limpo
    return sequence === this.clearCPF
}

// Instância do objeto validCPF com um CPF específico
const cpf = new validCPF('705.484.450-52');
// Verifica se o CPF é válido e exibe o resultado
if (cpf.valid()) return console.log("Válido");
// Se não for válido, exibe "Inválido"
if (!cpf.valid()) return console.log("Inválido");
