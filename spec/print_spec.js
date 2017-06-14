describe('Print', function() {
  var print
  var tsb
  var trans
  beforeEach(function() {
    tsb = new Bank();
    trans = new Transaction();
    print = new Print();
  })

  describe('Array', function() {
    it('is an empty array', function() {
      trans.bank = tsb;
      trans.credit(545)
      console.log = jasmine.createSpy("log");
      var statement = trans.print.print();
      expect(console.log).toHaveBeenCalledWith(statement);
    });
  });
});
