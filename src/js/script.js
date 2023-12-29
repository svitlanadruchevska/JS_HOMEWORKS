'use strict';

const num1 = prompt('Enter first number');
const num2 = prompt('Enter second number');
const operator = prompt('Select one of the operations( + , - , * , /)');

switch (operator) {
    case '+' :
        alert(+num1 + ' + ' + num2 +' = ' +(+num1 + +num2));
        break;
    case '-' :
        alert(+num1 + ' - ' + num2 +' = ' +(num1 - num2));
        break;
    case '*' :
        alert(+num1 + ' * ' + num2 +' = ' +(num1 * num2));
        break;
    case '/' :
        alert(+num1 + ' / ' + num2 +' = ' +(num1 / num2).toFixed(2));
        break;
    default:
        alert("No such operator exists");
}

