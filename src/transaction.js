(function(exports) {
  function Transaction(bank) {
    this.bank = bank;
    statement = new BankStatement();
    this.creditArr = [];
    this.debitArr = [];
  };

  Transaction.prototype.credit = function(moneyIn) {
    this.bank.increaseBalance(moneyIn);
    var creditTrans = [CurrentDate(), moneyIn, 0, this.bank.balance]
    this.creditArr.push(creditTrans);
  };

  Transaction.prototype.debit = function(moneyOut) {
    this.bank.decreaseBalance(moneyOut);
    var debitTrans = [CurrentDate(), 0, moneyOut, this.bank.balance]
    this.debitArr.push(debitTrans);
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
// statement.creditArray = trans.creditArr
// statement.creditList();
// print.printList = statement.creditList();
