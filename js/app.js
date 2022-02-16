let calculateButton = document.getElementById("calculate");
let saveButton = document.getElementById("save");
//get income input
function getIncome() {
  let incomeField = document.getElementById("income-input");
  let income = incomeField.value;
  return income;
}

//get expenses inputs

function getIndiviualCosting(expensesArea) {
  var inputCostingField = document.getElementById(expensesArea + "-cost");
  var cost = parseFloat(inputCostingField.value);
  if (isNaN(cost)) {
    alert("Please Enter a number");
  } else if (cost < 0) {
    alert("Money Can not be negative");
  } else {
    return cost;
  }
}

//calculate Balance
function balanceCalculate(totalCosting) {
  var income = getIncome();
  if (income < totalCosting) {
    alert("Have not sufficent money!");
  } else {
    var totalExpensesField = document.getElementById("expenses");
    totalExpensesField.innerText = totalCosting;
    var remainBalance = income - totalCosting;
    var balanceField = document.getElementById("balance");
    balanceField.innerText = remainBalance;
  }
}

//when calculate button clicked
calculateButton.addEventListener("click", function () {
  let income = getIncome();
  let foodCost = getIndiviualCosting("food");
  let rentCost = getIndiviualCosting("rent");
  let clothCost = getIndiviualCosting("cloth");
  let totalCosting = foodCost + rentCost + clothCost;
  let calculateBalance = balanceCalculate(totalCosting);
});

//when save button clicked
saveButton.addEventListener("click", function () {
  var income = getIncome();
  //geting saving amount want to save
  var saveField = document.getElementById("save-percentage-input");
  var saveingPercentage = saveField.value;
  var saveingAmount = (income * saveingPercentage) / 100;
  //current balance amount
  var balanceField = document.getElementById("balance");
  var balance = parseFloat(balanceField.innerText);
  if (balance < saveingAmount) {
    alert("you have not enough balance to save this amount");
  } else {
    var saveingAmountField = document.getElementById("saving-amount");
    var remainingAmountField = document.getElementById("remaining-amount");
    var balanceField = document.getElementById("balance");
    var balance = parseFloat(balanceField.innerText);
    var remainTotalBalance = balance - saveingAmount;
    saveingAmountField.innerText = saveingAmount;
    remainingAmountField.innerText = remainTotalBalance;
  }
});
