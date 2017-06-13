(function(exports) {
  function Transaction(bank) {
    this.bank = bank;
    this.print = new Print();
  };

  Transaction.prototype.credit = function(moneyIn) {
    this.bank.increaseBalance(moneyIn);
    this.transRecord('credit', moneyIn);
  };

  Transaction.prototype.debit = function(moneyOut) {
    this.bank.decreaseBalance(moneyOut);
    this.transRecord('debit', moneyOut);
  };

  Transaction.prototype.transRecord = function(type, amount) {
    var record = new Record(CurrentDate(), type, amount, this.bank.balance);
    this.print.addData(record);
  };
  exports.Transaction = Transaction;
})(this);
