describe('Bank', function() {
  var bank;
  beforeEach(function() {
    bank = new Bank();
  });

  describe('balance', function() {
    it('returns the balance of 0', function() {
      expect(bank._balance).toEqual(0);
    });
  });

  describe('date', function() {
    it('returns the current date', function() {
      expect(bank._date).toEqual(today)
    });
  });
});
