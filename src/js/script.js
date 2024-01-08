'use strict';

const userNum = prompt('Введіть будь-яке число');

if (userNum < 1) {
    console.log(NaN);
} else {
    let divisor = 2;
    while (divisor <= userNum) {
        if (userNum % divisor === 0) {
            console.log('Найменший дільник числа ' + userNum + ' це ' + divisor);
            break;
        }
        divisor++;
    }

    if (divisor / userNum === 1) {
        console.log(userNum + ' це просте число');
    }
}


