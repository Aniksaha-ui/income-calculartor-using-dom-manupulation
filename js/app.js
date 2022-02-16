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

saveButton.addEventListener("click", function () {
  console.log("Save Button Clicked");
});
