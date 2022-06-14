// Business Logic // name || initialdeposit = balance

function BankAccount(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
  }
  
 BankAccount.prototype.deposit= function(depositAmount){
  this.balance = this.balance + depositAmount; 
}

 BankAccount.prototype.withdraw= function(withdrawAmount){
  this.balance = this.balance - withdrawAmount; 
}
  
// UI Logic--------
let bankAccount = new BankAccount();


$(document.ready(function() {
  $("form#bank").submit(function(event) {
    event.preventDefault();
    let inputtedName = $("#inputted-name").val();
    let inputtedInitialDeposit = $("#inputted-initial-deposit").val();
    let inputtedDepositAmount = $("#inputted-deposit-amount").val();
    let inputtedWithdrawAmount = $("#inputted-withdraw-amount").val();
    if (!Number(inputtedDepositAmount, inputtedInitialDeposit, inputtedWithdrawAmount)) {
      $(".results").html("Letters are not currency.");
      $("#balance").toggle();
    }
    let newBankAccount = new BankAccount(inputtedName, inputtedInitialDeposit);
    $("#balanceOutput").html(newBankAccount.balance);

  })

}));
