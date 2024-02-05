'use strict';

const arr = ['cat', 'dog', 'turtle', 'monkey', 'duck', 'dog'];

const wordRepeat = arr.reduce(function (accumulator, currentValue) {
  if (!accumulator[currentValue]) {
    accumulator[currentValue] = 1;
  } else {
    accumulator[currentValue]++;
  }
  return accumulator;
}, []);

console.log(wordRepeat);
