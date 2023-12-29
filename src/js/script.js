'use strict';

const num1 = +prompt('Enter first number');
const num2 = +prompt('Enter second number');
const num3 = +prompt('Enter third number');
const numArr = [num1, num2, num3];

alert( 'Arithmetic mean of numbers ' + num1 + ', ' + num2 + ', ' +num3 + ' = ' +
    +((num1+num2+num3)/numArr.length).toFixed(2));

