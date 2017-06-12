(function(exports) {
  function Bank() {
    this.balance = 0;
  };
  exports.Bank = Bank;
})(this);
// Bank.prototype.credit = function(money_in) {
//   this.balance += money_in;
//   var credit_transaction = [this.date, money_in, 0, this.balance]
//   this.transaction.push(credit_transaction);
// };
//
// Bank.prototype.withdraw = function(money_out) {
//   this.balance -= money_out;
//   var withdraw_trans = [this.date, 0, money_out, this.balance]
//   this.transaction.push(withdraw_trans);
// };
//
// Bank.prototype.view_statement = function() {
//   return this.transaction.join(" \n");
// };
