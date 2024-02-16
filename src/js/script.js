'use strict';

const newArr = function (arr, ...arrAll) {
  if (arrAll.length > 1) {
    throw new Error('Function accepts only 1 argument, too much arguments provided');
  }
  const result = [];

  function flatArr (array) {
    for (const num of array) {
      if (Array.isArray(num)) {
        flatArr(num);
      } else {
        result.push(num);
      }
    }
  }

  flatArr(arr);
  return result;
};

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13]
];

const flatArray = newArr(complexArray);
console.log(flatArray);
