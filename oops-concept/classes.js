class BankAccount {
    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName, balance) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposite(amount){
        this.balance += amount
    }

    withdraw(amount){
        this.balance -+ amount
    }
}

const rakeshAccount = new BankAccount('Rakesh', 2000)

// rakeshAccount.deposite(1000)
rakeshAccount.withdraw(1000)

console.log(rakeshAccount);
