describe('BankStatement', function() {
  var statement
  var bank;
  var trans;
  beforeEach(function() {
    statement = new BankStatement();
    bank = new Bank();
    trans = new Transaction();
    trans.bank = bank;
  })
  describe('record', function() {
    it('is a default array', function() {
      expect(statement.record).toEqual([["date", "credit", "debit", "balance"]]);
    });
  });

  describe ('view statement', function() {
    it('returns record of recent credit transations', function() {
      trans.credit(700);
      expect(statement.viewStatement()).toEqual("date,credit,debit,balance \n12/06/2017,700,0,700 \n12/06/2017,0,60,540");
    });

    it('returns a record of recent debit transactions', function() {
      trans.credit(600);
      trans.debit(60);
      expect(statement.viewStatement()).toEqual("date,credit,debit,balance \n12/06/2017,600,0,600 \n12/06/2017,0,60,540");
    })
  });
});
