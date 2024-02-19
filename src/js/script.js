'use strict';
const newArrStr = arr => arr.filter(str => str.length > 5);
const arrStr = ['Thomas', 'John', 'Maksym', 'Michael', 'Rachel', 'Joe'];
console.log(newArrStr(arrStr));

const sumEvenNums = arrNums => arrNums.reduce((acc, curr) => {
  return curr % 2 === 0 ? acc + curr : acc;
}, 0);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(sumEvenNums(numbers));

const arithmeticalMean = arrNums => {
  return arrNums.reduce((acc, curr) => {
    return acc + curr;
  }, 0) / arrNums.length;
};
console.log(arithmeticalMean(numbers));
