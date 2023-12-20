class Account {
    Acc_no;
    Balance;
    static accounts;
    constructor(Acc_no = "123", Balance = 10000) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    debitAmount() {
        return this.Balance;
    }
    creditAmount() {
        return this.Balance;
    }
    getBalance() {
        return this.Balance;
    }
}
class Current_Account extends Account {
    Interest_rate;
    constructor(Interest_rate = 0.1) {
        super();
        this.Interest_rate = Interest_rate;
    }
    Date_of_opening;
    addCustomer(name, id) {
        Account.accounts.push({ Name: name, id: id });
    }
    removeCustomer(id) {
        for (let ele of Account.accounts) {
            if (ele.id === id) {
                ele == null;
            }
        }
        return 'the account has been removed';
    }
}
class Saving_Account extends Account {
    Min_Balance;
    constructor(Min_Balance = 1000) {
        super();
        this.Min_Balance = Min_Balance;
    }
    Date_of_opening;
    addCustomer(name, id) {
        Account.accounts.push({ Name: name, id: id });
    }
    removeCustomer(id) {
        for (let ele of Account.accounts) {
            if (ele.id === id) {
                ele == null;
            }
        }
        return 'the account has been removed';
    }
}
