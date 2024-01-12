'use strict';

let result = '';
for (let i = 20; i <= 30; i += 0.5) {
    result += i + ' ';
}
console.log(result);

let convert = '';
for (let i = 10; i <= 100; i += 10) {
    convert += i + '$' + ' = ' + i * 27 + 'грн' + (i < 100 ? ', ' : '');
}
console.log(convert);

const userNum = +prompt('Будь ласка, введіть будь-яке число');
let integerNums = '';
for (let i = 1; i <= 100; i++) {
    if (i ** 2 > userNum) continue;
    integerNums += (i + ' ');
}
console.log(integerNums);

const customNum = +prompt('Будь ласка, введіть будь-яке число');
if (customNum <= 1) {
    console.log('Число ' + customNum + 'не є простим');
} else {
    let primeNum = true;
    for (let i = 2; i <= Math.sqrt(customNum); i++) {
        if (customNum % i === 0) {
            primeNum = false;
            break;
        }
    }
    if (primeNum) {
        console.log('Число ' + customNum + ' є простим');
    } else {
        console.log('Число ' + customNum + ' не є простим');
    }
}

const num = +prompt('Будь ласка, введіть будь-яке число');
let getResult = false;
let i = 1;
while (num >= Math.pow(3, i)) {
    if (num % Math.pow(3, i) === 0) {
        getResult = true;
        break;
    }
    i++;
}

if (getResult) {
    console.log('Число ' + num + ' можна отримати шляхом зведення числа 3 в ' + i + ' ступінь');
} else {
    console.log('Число ' + num + ' не можна отримати шляхом зведення числа 3 в ' + i + ' ступінь');
}

