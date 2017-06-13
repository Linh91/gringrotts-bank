(function(exports) {
  function Print(printList) {
    this.printList = printList;
  };

  Print.prototype.printState = function () {
    return this.printList.join(" \n");
  };
  exports.Print = Print;
})(this);
