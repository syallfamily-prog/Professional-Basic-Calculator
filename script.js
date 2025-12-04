const display = document.getElementById("display");

/**
 * Appends the value of the button clicked to the display.
 * @param {string} value The string value to append (number, operator, or function call).
 */
function appendToDisplay(value) {
  display.value += value;
}

/**
 * Clears the entire display.
 */
function clearDisplay() {
  display.value = "";
}

/**
 * Deletes the last character from the display.
 */
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

/**
 * Calculates the result of the expression currently in the display.
 */
function calculate() {
  try {
    // Use Math.round to handle floating point inaccuracies for simple results
    // Example: 0.1 + 0.2 should be 0.3
    let result = eval(display.value);

    // Check if the result is a number and not too large/small
    if (typeof result === "number" && isFinite(result)) {
      // Fixes result to a reasonable number of decimal places for display
      display.value = parseFloat(result.toFixed(10));
    } else {
      // Handle cases like log(-1) or division by zero
      display.value = "Error";
    }
  } catch (e) {
    // Handle syntax errors (e.g., incomplete expression)
    display.value = "Error";
  }
}
