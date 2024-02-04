'use strict';

const arr = ['cat', 'dog', 'turtle', 'monkey', 'duck', 'dog'];

const indexOf = function (arr, searchElement, fromIndex = 0) {
  for (let i = fromIndex; i < arr.length; i += 1) {
    if (arr[i] === searchElement) {
      return i;
    }
  }
  return -1;
};
console.log(indexOf(arr, 'dog'));
console.log(indexOf(arr, 'giraffe'));

const lastIndexOf = function (arr, searchElement, fromIndex) {
  for (let i = fromIndex; i >= 0; i -= 1) {
    if (arr[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

console.log(lastIndexOf(arr, 'dog'));
console.log(lastIndexOf(arr, 'giraffe'));

const find = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};
const resultFind = find(arr, function (element) {
  return element === 'monkey';
});

console.log(resultFind);

const findIndex = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i])) {
      return i;
    }
  }
  return -1;
};
const resultFindIndex = findIndex(arr, function (element) {
  return element === 'monkey';
});

console.log(resultFindIndex);

const includes = function (arr, searchElement) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === searchElement) {
      return true;
    }
  }
  return false;
};

console.log(includes(arr, 'dog'));
console.log(includes(arr, 'giraffe'));

const every = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

const allElements = every(arr, function (elements) {
  return elements === 'duck';
})

console.log(allElements);

const some = function (arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

const someElements = some(arr, function (elements) {
  return elements === 'duck';
})

console.log(someElements);
