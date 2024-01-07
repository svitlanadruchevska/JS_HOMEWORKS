'use strict';

//task1
console.log('task1');
const x = 10;
const y = 7;
let result = (x > y) ? 'x більше за y' : 'x не більше, ніж y';
console.log(result);

//task3

console.log('task3');
const userNum = prompt('Введіть ціле число');
const userNumbLength = parseInt(userNum).toString().length;
const userNumSign = parseInt(userNum) >= 0 ? 'позитивне' : 'негативне';

if (userNumbLength === 1) {
    console.log('Число ' + userNum + ' однозначне ' + userNumSign);
} else if (userNumbLength === 2) {
    console.log('Число ' + userNum + ' двоцифрове ' + userNumSign);
} else if (userNumbLength === 3) {
    console.log('Число ' + userNum + ' трицифрове ' + userNumSign);
} else {
    console.log('Число ' + userNum + ' більше ніж трицифрове ' + userNumSign);
}

//task4

console.log('task4');
const num1 = +prompt('Введіть перше число');
const num2 = +prompt('Введіть друге число');
const num3 = +prompt('Введіть третє число');

if (num1 > num2 && num1 > num3) {
    console.log('Найбільше число ' + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log('Найбільше число ' + num2);
} else {
    console.log('Найбільше число ' + num3);
}

//task5

console.log('task5');
const side1 = +prompt('Введіть довжину першої сторони');
const side2 = +prompt('Введіть довжину другої сторони');
const side3 = +prompt('Введіть довжину третьої сторони');

if (((side1 + side2) > side3) && ((side2 + side3) > side1) && ((side1 + side3) > side2)) {
    console.log('Трикутник може існувати зі сторонами ' + side1 + ' ' + side2 + ' ' + side3);
} else {
    console.log('Трикутник не може існувати зі сторонами ' + side1 + ' ' + side2 + ' ' + side3);
}