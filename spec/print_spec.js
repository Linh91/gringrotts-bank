describe('Print', function() {
  var print
  beforeEach(function() {
    print = new Print();
  })

  describe('Array', function() {
    it('is an empty array', function() {
      expect(print.array).toEqual([]);
    });
  });
});
