// "use strict";

// const buttons = document.querySelectorAll(".btn");

// const operators = document.querySelectorAll(".operator");

// const calculatorDisplay = document.querySelector(".display");

// const calculator = (buttons, operators) => {
//   let sum = 0;
//   let firstNumber = "";
//   let secondNumber = "";
//   let operator = "";
//   buttons.forEach(button => {
//     button.addEventListener("click", () => {
//       if (operator === "") {
//         firstNumber += button.textContent;
//         calculatorDisplay.textContent = firstNumber;
//       } else {
//         secondNumber += button.textContent;
//         calculatorDisplay.textContent = secondNumber;
//       }
//     });
//   });

//   operators.forEach(btnOperator => {
//     btnOperator.addEventListener("click", () => {
//       if (btnOperator.textContent === "+") {
//         operator = "+";
//       } else if (btnOperator.textContent === "-") {
//         operator = "-";
//       } else if (btnOperator.textContent === "*") {
//         operator = "*";
//       } else if (btnOperator.textContent === "/") {
//         operator = "/";
//       } else if (btnOperator.textContent === "=") {
//         operator = "=";
//       } else if (btnOperator.textContent === "C") {
//         operator = "C";
//       } else {
//         operator = "";
//       }
//     });
//   });
//   return `${firstNumber} ${operator} ${secondNumber}`;
// };

// calculator(buttons, operators);

"use strict";

const buttons = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operator");
const calculatorDisplay = document.querySelector(".display");

const calculator = (buttons, operators) => {
  let firstNumber = "";
  let secondNumber = "";
  let operator = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      if (operator === "") {
        firstNumber += button.textContent;
        calculatorDisplay.textContent = firstNumber;
      } else {
        secondNumber += button.textContent;
        calculatorDisplay.textContent = secondNumber;
      }
    });
  });

  operators.forEach(btnOperator => {
    btnOperator.addEventListener("click", () => {
      const btnValue = btnOperator.textContent;

      if (
        btnValue === "+" ||
        btnValue === "-" ||
        btnValue === "*" ||
        btnValue === "/"
      ) {
        operator = btnValue;
      } else if (btnValue === "=") {
        let result = 0;
        // Perform the calculation based on the operator
        switch (operator) {
          case "+":
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
          case "-":
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
          case "*":
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
          case "/":
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
        }
        // Display and log the result
        calculatorDisplay.textContent = result;
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);

        // Reset after calculation
        firstNumber = result.toString();
        secondNumber = "";
        operator = "";
      } else if (btnValue === "C") {
        // Clear everything
        firstNumber = "";
        secondNumber = "";
        operator = "";
        calculatorDisplay.textContent = "0";
      }
    });
  });
};

calculator(buttons, operators);
