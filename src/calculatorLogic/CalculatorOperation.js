function add(x, y) {
  return Number(x) + Number(y);
}
function subtract(x, y) {
  return Number(x) - Number(y);
}
function multiply(x, y) {
  return Number(x) * Number(y);
}
function divide(x, y) {
  return Number(x) / Number(y);
}

export function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
}

export function negateSign(operand) {
  return Number(operand * -1);
  //   console.log(operand);
}
