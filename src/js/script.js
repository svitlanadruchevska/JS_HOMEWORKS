'use strict';

const a = prompt('Введіть а');

const result = a === 0 ? 'Вірно' :
               a > 0 ? 'Вірно' :
               a < 0 ? 'Вірно' :
               a >= 0 ? 'Вірно' :
               a <= 0 ? 'Вірно' :
               a !== 0 ? 'Вірно' :
               a === 'test' ? 'Вірно' :
               Number(a) === 1 ? 'Вірно' :
               (Number(a) > 0 && Number(a) < 5) ? 'Вірно' : 'Невірно';
console.log(result);

const b = prompt('Введіть b');

(Number(a) > 2 && Number(a) < 11) || (Number(b) >= 6 && Number(b) < 14) ? console.log('Вірно') : console.log('Невірно');

(Number(a) === 0 || Number(a) === 2) ? console.log(Number(a) + 7) : console.log(Number(a) / 10);

((Number(a) === 0 || Number(a) < 1) && Number(b) >= 3) ? console.log(Number(a) + Number(b)) : console.log(Number(a)
    - Number(b));


