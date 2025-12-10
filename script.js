const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

let isLight = false;

// Calculator Functionality
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "clear") {
      display.value = "";
    } else if (btn.id === "equal") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += btn.innerText;
    }
  });
});

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  isLight = !isLight;
  themeIcon.textContent = isLight ? "☀️" : "🌙";
});
