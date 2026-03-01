import {
  assignOperands,
  initialiseCalculator,
  displayedAnswer,
  switchToSecondNumber,
} from "../calculatorLogic/CalculatorState.js";
import { bigTextField, smallTextField } from "./dom.js";
import { newInput } from "./NumbersAndOperators.js";

export function clearValues(clearType) {
  if (clearType.includes("delete")) {
    if (displayedAnswer) return (smallTextField.textContent = "");
    // prevent the second operand from being deleted when the user has just selected an operator.
    // for example, first operand = 5, operator = "+", second operand = "", but in the UI, it appears
    // that the second operand could be the first operand as well (bigTextField === smallTextField).
    //
    // There's no major reason for this logic except to match the UI/UX behaviour of... the calculator.
    if (newInput && switchToSecondNumber) return;
    bigTextField.textContent = bigTextField.textContent.slice(0, -1);
    if (bigTextField.textContent === "") bigTextField.textContent = "0";
  } else if (clearType.includes("clearAll")) {
    bigTextField.textContent = "0";
    smallTextField.textContent = "";
    initialiseCalculator();
  } else if (clearType.includes("clearEntry")) bigTextField.textContent = "0";
  assignOperands(bigTextField.textContent);
}
