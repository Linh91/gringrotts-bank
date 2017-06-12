function Bank() {
  this.date = today
  this.balance = 0;
  this.statement = ["date", "credit", "debit", "balance"]
};

Bank.prototype.credit = function (money_in) {
  this.balance += money_in;
  credit_transaction = [this.date, money_in, 0, this.balance]
  this.statement.push(credit_transaction);
};

Bank.prototype.withdraw = function (money_out) {
  this.balance -= money_out;
};
