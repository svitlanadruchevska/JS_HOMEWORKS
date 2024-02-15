'use strict';

const getFactorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * getFactorial(num - 1);
};

console.log(getFactorial(3));

const pow = function (num, degree) {
  if (degree === 0) {
    return 1;
  }
  return num * pow(num, degree - 1);
};

console.log(pow(3, 3));

const sum = function (a, b) {
  if (b === 0) {
    return a;
  }
  return sum(a + 1, b - 1);
};
console.log(sum(5, 8));
