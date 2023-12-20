interface IAccount {
    Date_of_opening;
    addCustomer(name: string, id: number);
    removeCustomer(id: number);
}
class Account {
    static accounts: { Name: string, id: number }[]
    constructor(public Acc_no = "123", public Balance = 10000) { }
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
class Current_Account extends Account implements IAccount {
    constructor(public Interest_rate = 0.1) {
        super()
    }
    Date_of_opening: any;
    addCustomer(name: string, id: number): any {
        Account.accounts.push({ Name: name, id: id })
    }
    removeCustomer(id): string {
        for (let ele of Account.accounts) {
            if (ele.id === id) {
                ele == null;
            }
        }
        return 'the account has been removed';
    }
}
class Saving_Account extends Account implements IAccount {
    constructor(public Min_Balance = 1000) {
        super()
    }
    Date_of_opening: any;
    addCustomer(name, id) {
        Account.accounts.push({ Name: name, id: id })
    }
    removeCustomer(id): string {
        for (let ele of Account.accounts) {
            if (ele.id === id) {
                ele == null;
            }
        }
        return 'the account has been removed';
    }
}