"use strict";
let num1 = "";
let num2 = "";
let operator = "";

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (num1, num2, operator) => {
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
};

// const changeInput = (a, b) => {
//   if (num1 === "") {

//   }
// };
const input = document.querySelector(".input");
input.innerHTML = `${num1} ${operator} ${num2}`;
const dClear = document.querySelector(".dClear");
const clear = dClear.addEventListener("click", function () {
  num1 = 0;
  num2 = "";
  operator = "";
  input.innerHTML = `${num1} ${operator} ${num2}`;
});

const dSeven = document.querySelector(".dSeven");
const seven = dSeven.addEventListener("click", function () {
  num1 = 7;
  input.innerHTML = `7`;
});
const dEight = document.querySelector(".dEight");
const dNine = document.querySelector(".dNine");
const dDivide = document.querySelector(".dDivide");
const dFour = document.querySelector(".dFour");
const dFive = document.querySelector(".dFive");
const dSix = document.querySelector(".dSix");
const dMultiply = document.querySelector(".dMultiply");
const dOne = document.querySelector(".dOne");
const dTwo = document.querySelector(".dTwo");
const dThree = document.querySelector(".dThree");
const dSubtract = document.querySelector(".dSubtract");
const dDecimal = document.querySelector(".dDecimal");
const dZero = document.querySelector(".dZero");
const dEqual = document.querySelector(".dEqual");
const dAddition = document.querySelector(".dAddition");
