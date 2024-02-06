'use strict';

const arr = ['cat', 'dog', 'turtle', 'monkey', 'duck', 'dog'];

const reduce = function (array, callback, accumulator) {
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
};

const result = reduce(arr, function (acc, current) {
  acc[current] = (acc[current] || 0) + 1;
  return acc;
}, {});

console.log(result);
