// SuperClasses
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};
Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        return console.log(`Saldo insuficiente! voce possui R$${this.saldo.toFixed(2)}`)
    }

    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    this.verSaldo()
};
Conta.prototype.verSaldo = function () {
    return console.log(`Agencia: ${this.agencia} | conta: ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.costructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        return console.log(`Saldo insuficiente! voce possui R$${this.saldo.toFixed(2)}`);
    }

    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.costructor = ContaPoupanca;

const conta1 = new ContaCorrente(11, 11, 0, 100);
conta1.depositar(10);
conta1.sacar(110);
conta1.sacar(1);

console.log()

const conta2 = new ContaPoupanca(22, 22, 0, 100);
conta2.depositar(10);
conta2.sacar(110);
conta2.sacar(1);