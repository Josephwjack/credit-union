Describe: BankAccount

Test: "After initial deposit name, balance and initialdeposit will be saved under a new property."
Code: let benBankAccount = new BankAccount("ben", 100, 100");
Expected Output: {"name: 'Ben' , initialDeposit: 100, balance: 100}

Describe: prototype.deposit / prototype.withdraw functions

Test: "Amount deposited or withdrawn by user input with add or subtract from balance variable."
Code: let benBankAccount.deposit(500)
Expected Output: [Starting balance of 100] ---- benBankAccount should now have '600'