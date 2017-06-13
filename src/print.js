(function(exports) {
  function Print() {
    this.array = [];
  };

  Print.prototype.addData = function(record) {
    this.array.unshift(record);
  };

  Print.prototype.print = function() {
    console.log(header());
    console.log(body(this.array));
  };

  function header() {
    console.log("date" + "||" + "credit/debit" + "||" + "amount" + "||" + "balance");
  };

  function body(record) {
    record.forEach(function(element) {
      console.log(
        element.date + "||" +
        element.type + "||" +
        element.amount + "||" +
        element.balance + "||"
      );
    });
  };
  exports.Print = Print;
})(this);
