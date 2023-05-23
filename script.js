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

const input = document.querySelector(".input");
input.innerHTML = `${num1} ${operator} ${num2}`;
const dClear = document.querySelector(".dClear");
const clear = dClear.addEventListener("click", function () {
  num1 = "";
  num2 = "";
  operator = "";
  input.innerHTML = `${num1} ${operator} ${num2}`;
});

const dSeven = document.querySelector(".dSeven");
const seven = dSeven.addEventListener("click", function () {
  num1 += "7";
  input.innerHTML = `${num1}`;
});
const dEight = document.querySelector(".dEight");
const eight = dEight.addEventListener("click", function () {
  num1 += "8";
  input.innerHTML = `${num1}`;
});
const dNine = document.querySelector(".dNine");
const nine = dNine.addEventListener("click", function () {
  num1 += "9";
  input.innerHTML = `${num1}`;
});

const dFour = document.querySelector(".dFour");
const four = dFour.addEventListener("click", function () {
  num1 += "4";
  input.innerHTML = `${num1}`;
});
const dFive = document.querySelector(".dFive");
const five = dFive.addEventListener("click", function () {
  num1 += "5";
  input.innerHTML = `${num1}`;
});
const dSix = document.querySelector(".dSix");
const six = dSix.addEventListener("click", function () {
  num1 += "6";
  input.innerHTML = `${num1}`;
});
const dOne = document.querySelector(".dOne");
const one = dOne.addEventListener("click", function () {
  num1 += "1";
  input.innerHTML = `${num1}`;
});
const dTwo = document.querySelector(".dTwo");
const two = dTwo.addEventListener("click", function () {
  num1 += "2";
  input.innerHTML = `${num1}`;
});
const dThree = document.querySelector(".dThree");
const three = dThree.addEventListener("click", function () {
  num1 += "3";
  input.innerHTML = `${num1}`;
});
const dMultiply = document.querySelector(".dMultiply");
const fMultiply = dMultiply.addEventListener("click", function () {
  operator = "*";
  input.innerHTML = `${num1} ${operator}`;
});
const dDivide = document.querySelector(".dDivide");
const fDivide = dDivide.addEventListener("click", function () {
  operator = "/";
  input.innerHTML = `${num1} ${operator}`;
});
const dSubtract = document.querySelector(".dSubtract");
const fSubtract = dSubtract.addEventListener("click", function () {
  operator = "-";
  input.innerHTML = `${num1} ${operator}`;
});
const dAddition = document.querySelector(".dAddition");
const fAddition = dAddition.addEventListener("click", function () {
  operator = "+";
  input.innerHTML = `${num1} ${operator}`;
});
const dEqual = document.querySelector(".dEqual");
const dDecimal = document.querySelector(".dDecimal");
const dZero = document.querySelector(".dZero");
