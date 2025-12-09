/**
 * Calculator Display Element
 */
const display = document.getElementById("display");

/**
 *  Display Management Functions
 * These functions manage the calculator display.
 */
function appendToDisplay(value) {
  display.value += value;
}

/**
 * Display Clear Function.
 * This function clears the entire display.
 */
function clearDisplay() {
  display.value = "";
}

/**
 * Display Deleted Function.
 * This function removes the last character from the display.
 */
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

/**
 *Claculation Function.
 * This function evaluates the expression in the display and shows the result.
 */
function calculate() {
  try {
    let result = eval(display.value);

    if (typeof result === "number" && isFinite(result)) {
      display.value = parseFloat(result.toFixed(10));
    } else {
      display.value = "Error";
    }
  } catch (e) {
    display.value = "Error";
  }
}
