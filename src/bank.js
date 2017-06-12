function Bank() {
  this.date = CurrentDate();
  this.balance = 0;
  this.transaction = [["date", "credit", "debit", "balance"]]
};

Bank.prototype.credit = function(money_in) {
  this.balance += money_in;
  var credit_transaction = [this.date, money_in, 0, this.balance]
  this.transaction.push(credit_transaction);
};

Bank.prototype.withdraw = function(money_out) {
  this.balance -= money_out;
  var withdraw_trans = [this.date, 0, money_out, this.balance]
  this.transaction.push(withdraw_trans);
};

Bank.prototype.view_statement = function() {
  return this.transaction.join(" \n");
};


// tsb = new Bank();
// tsb.credit(77);
// tsb.withdraw(70);
// tsb.view_statement();
