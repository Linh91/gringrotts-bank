(function(exports) {
  function Bank() {
    this.balance = 0;
  };

  Bank.prototype.increaseBalance = function(amount) {
    this.balance += amount;
  };

  Bank.prototype.decreaseBalance = function(amount) {
    this.balance -= amount;
  };

  exports.Bank = Bank;
})(this);
