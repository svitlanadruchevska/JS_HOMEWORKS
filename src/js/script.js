'use strict';

const a = prompt('Введіть а');

const results = a === 0 ? 'Вірно' :
               a > 0 ? 'Вірно' :
               a < 0 ? 'Вірно' :
               a >= 0 ? 'Вірно' :
               a <= 0 ? 'Вірно' :
               a !== 0 ? 'Вірно' :
               a === 'test' ? 'Вірно' :
               Number(a) === 1 ? 'Вірно' :
               (Number(a) > 0 && Number(a) < 5) ? 'Вірно' : 'Невірно';
console.log(results);

const b = prompt('Введіть b');

(Number(a) > 2 && Number(a) < 11) || (Number(b) >= 6 && Number(b) < 14) ? console.log('Вірно') : console.log('Невірно');

(Number(a) === 0 || Number(a) === 2) ? console.log(Number(a) + 7) : console.log(Number(a) / 10);

((Number(a) === 0 || Number(a) < 1) && Number(b) >= 3) ? console.log(Number(a) + Number(b)) : console.log(Number(a)
    - Number(b));

const num = +prompt('Введіть одне з значень : 1, 2, 3, 4');
let result;

switch (num) {
    case 1 : result = 'Зима';
    break;
    case 2 : result ='Весна';
    break;
    case 3 : result = 'Літо';
    break;
    case 4 : result = 'Осінь';
    break;
    default : result = 'Немає такої пори року'
}

alert(result);
