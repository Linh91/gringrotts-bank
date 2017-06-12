function Bank() {
  this.date = today
  this.balance = 0;
};

Bank.prototype.credit = function (money_in) {
  this.balance += money_in;
};

Bank.prototype.withdraw = function (money_out) {
  this.balance -= money_out;
};
