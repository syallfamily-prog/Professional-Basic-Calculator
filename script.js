const display = document.getElementById("display");
let currentValue = "";

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    if (value === "C") {
      currentValue = "";
      display.innerText = "0";
    } else if (value === "=") {
      currentValue = currentValue.replace(/x/g, "*").replace(/÷/g, "/");

      try {
        display.innerText = eval(currentValue);
        currentValue = display.innerText;
      } catch {
        display.innerText = "Error";
        currentValue = "";
      }
    } else {
      currentValue += value;
      display.innerText = currentValue;
    }
  });
});
