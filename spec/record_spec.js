describe('Record', function() {
  var record
  beforeEach(function() {
    record = new Record();
  })

  describe('date', function() {
    it('can define date', function() {
      record.date = "1"
      expect(record.date).toEqual("1");
    });
  });

  describe ('type', function() {
    it('can define type', function() {
      record.type = "debit"
      expect(record.type).toEqual("debit");
    });
  });

  describe ('amount', function() {
    it('can define amount', function() {
      record.amount = 1
      expect(record.amount).toEqual(1);
    });
  });

  describe ('balance', function() {
    it('can define amount', function() {
      record.balance = 500
      expect(record.balance).toEqual(500);
    });
  });
});
