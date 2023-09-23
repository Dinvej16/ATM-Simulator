let account = new Object();

account.accountName = "Unknown";
account.balance = 100;

account.getBalance = function () {
  prompt(
    "Your balance: " + account.balance + "$ " + "(Press enter to proceed)"
  );
};

account.deposit = function () {
  let cashInput = parseFloat(
    prompt("Enter the amount of cash you want to deposit")
  );

  if (cashInput >= 1) {
    account.balance += cashInput;
  } else if (cashInput <= 0) {
    account.accountError();
    account.deposit();
  } else {
    account.accountError();
    account.deposit();
  }
};

account.withdrawal = function () {
  let cashTakeOut = parseFloat(
    prompt(
      "Enter the amount of cash you want to withdrawal" +
        " (Balance: " +
        account.balance +
        "$)"
    )
  );

  if (cashTakeOut <= account.balance && cashTakeOut > 0) {
    account.balance -= cashTakeOut;
  } else if (cashTakeOut > account.balance) {
    prompt(
      "You don't have that much money on your account.. Press enter to Try again"
    );
    account.withdrawal();
  } else if (cashTakeOut < 1) {
    account.accountError();
    account.withdrawal();
  } else {
    account.accountError();
    account.withdrawal();
  }
};

/*AccountError funktionen har jag använt på ställen i koden där fel kan inträffa, om 
användren t.ex. försöker skriva in bokstäver, försöker gå vidare med med en tom sträng.
Jag använde även funktionen i min switch som default då användaren inte ska kunna 
stänga ner programmet med ett enter tryck utan måste välja "Exit" valet för att stänga ner,
även där kan man inte mata in bokstäver bara siffror fungerar. 
*/
account.accountError = function () {
  prompt("Error! Press enter to try again...");
};

account.getAccountName = function () {
  prompt(
    "Name of account: " + account.accountName + " (Press enter to proceed)"
  );
};

account.exitAccount = function () {
  prompt("Shutting down ATM... Press enter to exit!");
};

/* Som jag har uppfattat det så avnänds "parseFloat" för att omvandla en sträng 
till en siffra. Jag insåg detta när jag skapade menyn och min switch, programmet 
reagerade inte på när jag gjorde ett val utan stängdes bara ner. När jag la till
parseFloat så fungerade det att göra val i menyn och programmet stängdes inte ner. 
*/
atm = function () {
  let menuChoice = parseFloat(
    prompt(
      "Enter a number to make a choice! 1.(See balance) 2.(Make a deposit) 3.(Make a withdrawl) 4.(Get account name) 5.(Exit)"
    )
  );

  /*Jag använde mig ut av Switch då vi använt detta i föregående kurser
när vi har behövt skapa menyer där användera ska kunna göra olika val. 
Jag tycker även att det ser mycket snyggare ut med en switch än med en if/else.
*/
  switch (menuChoice) {
    case 1:
      account.getBalance();
      this.atm();
      break;
    case 2:
      account.deposit();
      this.atm();
      break;
    case 3:
      account.withdrawal();
      this.atm();
      break;
    case 4:
      account.getAccountName();
      this.atm();
      break;
    case 5:
      account.exitAccount();
      break;
    default:
      account.accountError();
      this.atm();
      break;
  }
};
//Kör atm funktionen för att starta programmet.
this.atm();
