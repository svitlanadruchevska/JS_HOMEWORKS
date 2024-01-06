/*
'use strict';

const userNum = prompt('Введіть число');

if (!isNaN(userNum)) {
    let wordCorrect;
    if (+userNum === 1) {
        wordCorrect = 'рік';
    } else if (((userNum > 20) % 10) === 1) {
        wordCorrect = 'рік';
    } else if ((userNum  % 10) >= 2 && (userNum % 10) <= 4) {
        wordCorrect = 'роки';
    } else {
        wordCorrect = 'років';
    }

    alert(userNum + ' ' + wordCorrect);
} else {

    alert('Будь ласка, введіть число.');
}*/

'use strict';

const userNum = prompt('Введіть число');

if (!isNaN(userNum)) {
    let wordCorrect;
    if (+userNum === 1 || userNum % 10 === 1 && userNum % 100 !== 11) {
        wordCorrect = 'рік';
    } else if ((userNum >= 2 && userNum <= 4) || (userNum % 10 >= 2 && userNum % 10 <= 4) && (userNum % 100 < 10 || userNum % 100 >= 20)) {
        wordCorrect = 'роки';
    } else {
        wordCorrect = 'років';
    }

    alert(userNum + ' ' + wordCorrect);
} else {

    alert('Будь ласка, введіть число.');
}
