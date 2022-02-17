let calculateButton = document.getElementById("calculate");
let saveButton = document.getElementById("save");
//get income input
function getIncome() {
  let incomeField = document.getElementById("income-input");
  let income = incomeField.value;
  console.log(income);
  return income;
}

//get expenses inputs

function getIndiviualCosting(expensesArea) {
  // debugger;
  var inputCostingField = document.getElementById(expensesArea + "-cost");
  var cost = inputCostingField.value;
  if (isNaN(cost)) {
    alert("Please Enter a number");
  } else if (parseInt(cost) < 0) {
    alert("Money Can not be negative");
  } else {
    return parseInt(cost);
  }
}

//calculate Balance
function balanceCalculate(totalCosting) {
  var income = getIncome();
  // check is costing less than income or not and take step
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
  //get income
  var income = getIncome();
  //geting saving amount want to save
  var saveField = document.getElementById("save-percentage-input");
  var saveingPercentage = saveField.value;
  if (saveingPercentage < 0) {
    alert("Negative number is not allowed");
  } else {
    //calculate savings Amount
    var saveingAmount = (income * saveingPercentage) / 100;
    //current balance amount
    var balanceField = document.getElementById("balance");
    var balance = parseFloat(balanceField.innerText);
    //check wheater balance is greater than the amount you want to save
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
  }
});
