document.addEventListener("DOMContentLoaded", function () {
  const expressionInput = document.getElementById("expression");
  const resultDisplay = document.getElementById("result");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.innerText;

      // Clear button resets the input & result
      if (this.classList.contains("clear")) {
        expressionInput.value = "";
        resultDisplay.textContent = "0";
      }
      // Delete button removes the last character
      else if (this.classList.contains("delete")) {
        expressionInput.value = expressionInput.value.slice(0, -1);
      }
      // Equals button evaluates the expression
      else if (this.classList.contains("equals")) {
        try {
          resultDisplay.textContent = eval(expressionInput.value) || "0";
        } catch {
          resultDisplay.textContent = "Error";
        }
      }
      // Append clicked button value to input
      else {
        expressionInput.value += value;
      }
    });
  });
});
