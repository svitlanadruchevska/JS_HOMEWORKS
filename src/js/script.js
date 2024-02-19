'use strict';

const sum = (num1, num2) => num1 + num2;
console.log(sum(20, 12));

const someStr = str => str.length;
console.log(someStr('Hello'));

const newArr = arr => arr.map(num => num + 1);
console.log(newArr([1, 2, 4, 8]));
