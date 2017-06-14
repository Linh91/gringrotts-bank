describe('Print', function() {
  var print
  var tsb
  var trans
  beforeEach(function() {
    tsb = new Bank();
    trans = new Transaction();
    print = new Print();
  })

  describe('Print', function() {
    it('gives you the bank statement', function() {
      trans.bank = tsb;
      trans.credit(545)
      console.log = jasmine.createSpy("log");
      var statement = trans.print.print();
      expect(console.log).toHaveBeenCalledWith(statement);
    });
  });
});
