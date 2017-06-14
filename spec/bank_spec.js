describe('Bank', function() {
  var bank;
  beforeEach(function() {
    bank = new Bank();
  });

  describe('balance', function() {
    it('has a default balance of 0', function() {
      expect(bank.balance).toEqual(0);
    });

    it('can be increased', function() {
      bank.increaseBalance(90);
      expect(bank.balance).toEqual(90);
    });

    it('can be decreased', function() {
      bank.increaseBalance(150);
      bank.decreaseBalance(15);
      expect(bank.balance).toEqual(135);
    });

    it('has the correct balance amount', function() {
      bank.increaseBalance(15);
      bank.decreaseBalance(9);
      bank.increaseBalance(48);
      bank.decreaseBalance(12);
      expect(bank.balance).toEqual(42);
    });
  });
});
