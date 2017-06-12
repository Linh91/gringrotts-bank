describe('BankStatement', function() {
  var statement
  var bank;
  var trans;
  beforeEach(function() {
    statement = new BankStatement();
    bank = new Bank();
    trans = new Transaction();
  })
  describe('record', function() {
    it('is a default array', function() {
      expect(statement.record).toEqual([["date", "credit", "debit", "balance"]])
    });
  });

  describe ('view statement', function() {
    it('returns record of recent transations', function() {
      trans.bank = bank;
      trans.credit(600);
      expect(statement.viewStatement()).toEqual("date,credit,debit,balance \n12/06/2017,600,0,600")
    });
  });
});
