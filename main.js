// Write your JavaScript here

function handleClickEvent(e) {
  var totalDue = document.getElementById("amount-due").value;
  var totalReceived = document.getElementById("amount-received").value;
  var change = (totalReceived - totalDue).toFixed(2);

  var dollars = Math.floor(change);
  document.getElementById("dollars-output").innerHTML = dollars;
  change = (change - dollars).toFixed(2);

  var quarters = Math.floor(change / 0.25);
  document.getElementById("quarters-output").innerHTML = quarters;
  change = (change - quarters * 0.25).toFixed(2);

  var dimes = Math.floor(change / 0.1);
  document.getElementById("dimes-output").innerHTML = dimes;
  change = (change - dimes * 0.1).toFixed(2);

  var nickels = Math.floor(change / 0.05);
  document.getElementById("nickels-output").innerHTML = nickels;
  change = (change - nickels * 0.05).toFixed(2);

  var pennies = Math.round(change / 0.01);
  document.getElementById("pennies-output").innerHTML = pennies;
  change = change - pennies;

  document.getElementById("change-output").innerHTML = `Here's your money $${(
    totalReceived - totalDue
  ).toFixed(2)}`;
}

document
  .getElementById("calculate-change")
  .addEventListener("click", () => handleClickEvent());
