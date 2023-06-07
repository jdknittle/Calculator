'use strict';
let num1 = '';
let num2 = '';
let operator = '';

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (num1, num2, operator) => {
  if (operator === '+') return add(num1, num2);
  if (operator === '-') return subtract(num1, num2);
  if (operator === '*') return multiply(num1, num2);
  if (operator === '/') return divide(num1, num2);
};

const input = document.querySelector('.input');
input.innerHTML = `${num1} ${operator} ${num2}`;
const dClear = document.querySelector('.dClear');
const dSeven = document.querySelector('.dSeven');
const dEight = document.querySelector('.dEight');
const dNine = document.querySelector('.dNine');
const dFour = document.querySelector('.dFour');
const dFive = document.querySelector('.dFive');
const dSix = document.querySelector('.dSix');
const dOne = document.querySelector('.dOne');
const dTwo = document.querySelector('.dTwo');
const dThree = document.querySelector('.dThree');
const dMultiply = document.querySelector('.dMultiply');
const dDivide = document.querySelector('.dDivide');
const dSubtract = document.querySelector('.dSubtract');
const dAddition = document.querySelector('.dAddition');
const dEqual = document.querySelector('.dEqual');
const dDecimal = document.querySelector('.dDecimal');
const dZero = document.querySelector('.dZero');

const clear = dClear.addEventListener('click', function () {
  num1 = '';
  num2 = '';
  operator = '';
  input.innerHTML = `${num1} ${operator} ${num2}`;
});

const addDisplayNumber = function (num) {
  if (operator === '') {
    num1 += num;
    input.innerHTML = `${num1}`;
  } else if (operator !== '') {
    num2 += num;
    input.innerHTML = `${num1} ${operator} ${num2}`;
  }
};

const seven = dSeven.addEventListener('click', function () {
  addDisplayNumber('7');
});
const eight = dEight.addEventListener('click', function () {
  addDisplayNumber('8');
});
const nine = dNine.addEventListener('click', function () {
  addDisplayNumber('9');
});

const four = dFour.addEventListener('click', function () {
  addDisplayNumber('4');
});
const five = dFive.addEventListener('click', function () {
  addDisplayNumber('5');
});
const six = dSix.addEventListener('click', function () {
  addDisplayNumber('6');
});
const one = dOne.addEventListener('click', function () {
  addDisplayNumber('1');
});
const two = dTwo.addEventListener('click', function () {
  addDisplayNumber('2');
});
const three = dThree.addEventListener('click', function () {
  addDisplayNumber('3');
});
const zero = dZero.addEventListener('click', function () {
  addDisplayNumber('0');
});
const fMultiply = dMultiply.addEventListener('click', function () {
  operator = '*';
  input.innerHTML = `${num1} ${operator}`;
});
const fDivide = dDivide.addEventListener('click', function () {
  operator = '/';
  input.innerHTML = `${num1} ${operator}`;
});
const fSubtract = dSubtract.addEventListener('click', function () {
  operator = '-';
  input.innerHTML = `${num1} ${operator}`;
});
const fAddition = dAddition.addEventListener('click', function () {
  operator = '+';
  input.innerHTML = `${num1} ${operator}`;
});

const fEqual = dEqual.addEventListener('click', function () {
  if (num2 === '') {
    return false;
  } else {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    const result = operate(num1, num2, operator);

    num1 = result;
    num2 = '';
    operator = '';
    input.innerHTML = `${num1}`;
  }
});
