'use strict';

const userNum = prompt('Введіть число');

if (!isNaN(userNum)) {
    let wordCorrect;
    if ((userNum % 10) === 1) {
        wordCorrect = 'рік';
    } else if ((userNum % 10) >= 2 && (userNum % 10) <= 4) {
        wordCorrect = 'роки';
    } else {
        wordCorrect = 'років';
    }

    alert(userNum + ' ' + wordCorrect);
} else {

    alert('Будь ласка, введіть число.');
}