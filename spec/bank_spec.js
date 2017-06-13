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



  // describe('date', function() {
  //   it('returns the current date', function() {
  //     expect(bank.date).toEqual(CurrentDate());
  //   });
  // });
  //
  // describe('credit', function() {
  //   it('returns new balance when money is credited', function() {
  //     bank.credit(500);
  //     expect(bank.balance).toEqual(500);
  //   });
  // });
  //
  // describe('withdraw', function() {
  //   it('deducts the withdrawn amount from balance', function() {
  //     bank.credit(1000);
  //     bank.withdraw(90);
  //     expect(bank.balance).toEqual(910);
  //   });
  // });
  //
  // describe('transaction', function() {
  //   it('returns a default transaction', function() {
  //     expect(bank.transaction).toEqual([["date", "credit", "debit", "balance"]]);
  //   });
  //
  //   it('returns the credit transaction in an array', function() {
  //     bank.credit(90);
  //     expect(bank.transaction[1]).toEqual([CurrentDate(), 90, 0, 90]);
  //   });
  //
  //   it('returns a withdrawal transaction in an array', function() {
  //     bank.credit(80);
  //     bank.withdraw(40);
  //     expect(bank.transaction[2]).toEqual([CurrentDate(), 0, 40, 40]);
  //   });
  // });
  //
  // describe('view statement', function() {
  //   it('shows all the transactions that have been made', function() {
  //     bank.credit(77);
  //     bank.withdraw(70);
  //     console.log(bank.view_statement());
  //     expect(bank.view_statement()).toEqual('date,credit,debit,balance \n12/06/2017,77,0,77 \n12/06/2017,0,70,7');
  //   });
  // });
});
