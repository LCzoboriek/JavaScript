class Account{
    constructor(name, number, balance){
        this.name = name;
        this.number = number;
        this.balance = balance;
    }
    deposit = function(amount){
        this.balance += amount;
    }
    withdraw = function(amount){
        if(amount <= this.balance){
        this.balance -= amount;}
    }
}

const a1 = new Account('Luke', '199', 2000);
const a2 = new Account('Peter', '200', 2000);

a1.deposit(100);
a2.withdraw(300);
console.log(a2.balance);

Account.prototype.displayAll = function(){
    console.log("Account name: ") +
    this.name
}
