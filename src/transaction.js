(function(exports) {
  function Transaction(bank) {
    this.bank = bank;
  };

  Transaction.prototype.credit = function(moneyIn) {
    this.bank.balance += moneyIn;
    statement = new BankStatement();
    creditTrans = [CurrentDate(), moneyIn, 0, this.bank.balance]
  };

  Transaction.prototype.debit = function(moneyOut) {
    this.bank.balance -= moneyOut;
    statement = new BankStatement();
    debitTrans = [CurrentDate(), 0, moneyOut, this.bank.balance]
  };
  exports.Transaction = Transaction;
})(this);

// var tsb = new Bank();
// var trans = new Transaction();
// trans.bank = tsb
// trans.credit(500);
// tsb.balance
// trans.debit(50);
// tsb.balance