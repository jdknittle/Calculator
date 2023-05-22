let num1;
let num2;
let operator;

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const calculator = (a, b, operation) => {
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;
  if (operation === "/") return b === 0 ? "Can't divide by 0!" : a / b;
};

console.log(calculator(5, 0, "/"));
