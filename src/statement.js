(function(exports) {
  function BankStatement(creditArray, debitArray) {
    this.record = [["date", "credit", "debit", "balance"]];
    this.creditArray = creditArray;
    this.debitArray = debitArray;
    print = new Print();
  };

  BankStatement.prototype.transList = function() {
    this.record.push(this.creditArray);
    this.record.push(this.debitArray);
    return this.record
  };

  exports.BankStatement = BankStatement;
})(this);
