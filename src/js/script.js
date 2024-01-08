'use strict';

//part1

const arr = [1, 2, 3, 4, 5];

let sumArr = 0;

for (let i = 0; i < arr.length; i++) {
    sumArr += arr[i];
}
console.log('Сума елементів масиву = ' + sumArr);

//part2

let sumSquares = 0;

for (let i = 0; i < arr.length; i++) {
    sumSquares += Math.pow(arr[i], 2);
}

console.log('Сума квадратів елементів масиву = ' + sumSquares);

