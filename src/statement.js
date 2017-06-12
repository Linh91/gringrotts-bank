(function(exports) {
  function BankStatement() {
    this.record = [["date", "credit", "debit", "balance"]]
  };

  BankStatement.prototype.viewStatement = function () {
    // return this.record.join(" \n");
    this.record.push(creditTrans);
    console.log(this.record)
  };
  exports.BankStatement = BankStatement;
})(this);
