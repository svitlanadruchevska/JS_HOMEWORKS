'use strict';
const checkNumber = function () {
  const userInput = document.getElementById('numberInput').value;
  if (!userInput || isNaN(userInput)) {
    alert('Введіть дійсне число!');
    return;
  }
  const number = Number(userInput);
  if (number % 2 === 0) {
    alert('Парне число');
  } else {
    alert('Непарне число');
  }
};
