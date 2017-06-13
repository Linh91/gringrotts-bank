(function(exports) {
  function Record(date, type, amount, balance) {
    this.date = date;
    this.type = type;
    this.amount = amount
    this.balance = balance;
  };

  exports.Record = Record;
})(this);
