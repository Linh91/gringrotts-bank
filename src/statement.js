(function(exports) {
  function BankStatement() {
    this.record = [["date", "credit", "debit", "balance"]]
  };

  BankStatement.prototype.viewStatement = function () {
    this.record.push(creditTrans);
    return this.record.join(" \n");
  };
  exports.BankStatement = BankStatement;
})(this);
