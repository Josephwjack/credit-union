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