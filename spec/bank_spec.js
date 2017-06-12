describe('Bank', function() {
  var bank;
  beforeEach(function() {
    bank = new Bank();
  });

  describe('balance', function() {
    it('returns the balance of 0', function() {
      expect(bank.balance).toEqual(0);
    });
  });

  describe('date', function() {
    it('returns the current date', function() {
      expect(bank.date).toEqual(today);
    });
  });

  describe('credit', function() {
    it('returns new balance when money is credited', function() {
      bank.credit(500);
      expect(bank.balance).toEqual(500);
    });
  });

  describe('withdraw', function() {
    it('deducts the withdrawn amount from balance', function() {
      bank.credit(1000);
      bank.withdraw(90);
      expect(bank.balance).toEqual(910);
    })
  })
});
