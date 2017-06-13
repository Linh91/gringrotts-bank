describe('Transaction', function() {
  var bank;
  var trans;
  beforeEach(function() {
    bank = new Bank();
    trans = new Transaction();
    trans.bank = bank;
  })

  describe('Credit', function() {
    it('returns a new balance when money is credited', function() {
      trans.credit(500);
      expect(bank.balance).toEqual(500);
    });
  });

  describe('Debit', function() {
    it('returns a deducted balance', function() {
      trans.credit(600);
      trans.debit(60);
      expect(bank.balance).toEqual(540);
    });
  });

  describe('CreditArr', function() {
    it('has an empty array by default', function() {
      expect(trans.creditArr).toEqual([]);
    });
  });
});
