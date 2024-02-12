// SuperClasses
class Account {
    constructor(AccountBank, bankAgency, bankBalance) {
        this.AccountBank = AccountBank;
        this.bankAgency = bankAgency;
        this.bankBalance = bankBalance;
    }

    addMoney(moneyValue) {
        this.bankBalance += moneyValue;
        return this.viewCount();
    }

    removeMoney(moneyValue) {
        if (this.bankBalance < moneyValue) {
            console.log("Valor acima do limite!");
            console.log(`Saldo: ${this.bankBalance}`);
            return
        }

        this.bankBalance -= moneyValue;
        return this.viewCount();
    }

    viewCount() {
        console.log(`Conta bancária: ${this.AccountBank}`);
        console.log(`Agência bancária: ${this.bankAgency}`);
        console.log(`Saldo na conta: R$ ${this.bankBalance.toFixed(2)}`);
        console.log("");
    }
}

/* classe CurrentAccount que herda da classe Account através do "extends", permitindo que CurrentAccount compartilhe os atributos e métodos definidos em Account. */
class CurrentAcount extends Account {
    // Construtor da classe CurrentAccount
    constructor(AccountBank, bankAgency, bankBalance, limit) {
        /* Chama o construtor da classe pai (Account) para inicializar os atributos herdados
        através do super. super é uma referência para o construtor da classe pai (Account), que é invocado aqui com os parâmetros correspondentes.*/
        super(AccountBank, bankAgency, bankBalance);
        this.limit = limit;
    }

    removeMoney(moneyValue) {
        if (moneyValue > (this.bankBalance + this.limit)) {
            console.log("Valor acima do limite!");
            console.log(`Saldo: ${this.bankBalance}`);
            return
        }

        this.bankBalance -= moneyValue;
        return this.viewCount();
    }
}

// Conta poupança
class SavingsAccount extends Account {
    // Construtor da classe CurrentAccount
    constructor(AccountBank, bankAgency, bankBalance) {
        /* Chama o construtor da classe pai (Account) para inicializar os atributos herdados
        através do super. super é uma referência para o construtor da classe pai (Account), que é invocado aqui com os parâmetros correspondentes.*/
        super(AccountBank, bankAgency, bankBalance);
    }
}
const currentCount = new CurrentAcount(6666, 1111, 100, 1000);
currentCount.removeMoney(1000);

const savingsAccount = new SavingsAccount(1010, 202022, 1412);
savingsAccount.removeMoney(2000);