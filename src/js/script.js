'use strict';

const userNum = parseInt(prompt('Будь ласка, введіть будь-яке число'));
const degree = parseInt(prompt('Введіть ступінь, до якої необхідно піднести число'));
function exponentiation(userNum, degree = 1) {
    if (userNum === null || isNaN(userNum) || degree === null || isNaN(degree)) {
        return 'Помилка. Будь ласка, введіть корректне число';
    }
    return  Math.pow(userNum, degree);
}

const result = exponentiation(userNum, degree);
alert('Результат приведення числа ' + userNum + ' в ' + degree + ' ступінь : ' + result);


