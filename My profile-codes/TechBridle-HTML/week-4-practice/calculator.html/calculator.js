const display = document.getElementById("display");

let currentInput = "0";
let previousInput = null;
let operator = null;
let shouldResetDisplay = false;

function updateDisplay() {
  display.textContent = currentInput;
}

function appendNumber(value) {
  if (shouldResetDisplay) {
    currentInput = "0";
    shouldResetDisplay = false;
  }

  if (value === "." && currentInput.includes(".")) return;

  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }

  updateDisplay();
}

function setOperator(nextOperator) {
  if (operator && !shouldResetDisplay) {
    calculate();
  }

  previousInput = parseFloat(currentInput);
  operator = nextOperator;
  shouldResetDisplay = true;
}

function calculate() {
  if (operator === null || previousInput === null) return;

  const current = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = previousInput + current;
      break;
    case "-":
      result = previousInput - current;
      break;
    case "*":
      result = previousInput * current;
      break;
    case "/":
      if (current === 0) {
        currentInput = "Error";
        previousInput = null;
        operator = null;
        shouldResetDisplay = true;
        updateDisplay();
        return;
      }
      result = previousInput / current;
      break;
    default:
      return;
  }

  currentInput = String(result);
  previousInput = null;
  operator = null;
  shouldResetDisplay = true;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "0";
  previousInput = null;
  operator = null;
  shouldResetDisplay = false;
  updateDisplay();
}

function deleteLast() {
  if (shouldResetDisplay || currentInput === "Error") {
    clearDisplay();
    return;
  }

  if (currentInput.length <= 1) {
    currentInput = "0";
  } else {
    currentInput = currentInput.slice(0, -1);
  }

  updateDisplay();
}

updateDisplay();
