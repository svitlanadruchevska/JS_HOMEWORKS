'use strict';

let result = '';
for (let i = 10; i <= 20; i++) {
    result += i + (i < 20 ? ', ' : '');
}
console.log(result);

let squares = '';
for (let i = 10; i <= 20; i++) {
    squares += i * i;
    if (i < 20) {
        squares += ', ';
    }
}
console.log(squares);

console.log('Таблиця множення на 7 :');
for (let i = 1; i <= 10; i++) {
    console.log('7 x ' + i + ' = ' + (7 * i));
}

let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log('Сума всіх цілих чисел від 1 до 15 : ' + sum);

let multiplication = 1;
for (let i = 15; i <= 35; i++) {
    multiplication *= i;
}
console.log('Добуток всіх цілих чисел від 15 до 35 : ' + multiplication);

let mean = 0;
for (let i = 1; i <= 500; i++) {
    mean += i / 500;
}
console.log("Cереднє арифметичне всіх цілих чисел від 1 до 500: " + mean);

let sumDouble = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    sumDouble += i;
}
console.log("Сума парних чисел в діапазоні від 1 до 20: " + sumDouble);

let range = '';
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        range += i + (i < 198 ? ', ' : '');
    }
}
console.log(range);

const userNum = prompt('Введіть натуральне число');
let divisors = '';
let pairedDivisors = '';
let sumPairedDivisors = 0;
for (let i = 1; i <= userNum; i++) {
    if (userNum % i === 0) {
        divisors += i + (i < userNum ? ', ' : '');
        if (i % 2 === 0) {
            pairedDivisors += i + (i < userNum ? ', ' : '');
            sumPairedDivisors += i;
        }
    }
}
console.log('Дільники числа ' + userNum + ' : ' + divisors);
console.log('Парні дільники числа ' + userNum + ' : ' + (pairedDivisors !== '' ? pairedDivisors : 'немає у цього числа'));
console.log('Сума парних дільників числа ' + userNum + ' : ' + sumPairedDivisors);


for (let i = 1; i <= 10; i++) {
    let j = 1;
    while (j <= 10) {
        console.log(i + ' x ' + j + ' = ' + i * j);
        j++;
    }
}


