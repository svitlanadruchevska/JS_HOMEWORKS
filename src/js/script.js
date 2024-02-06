'use strict';

function runCallbacks (callbacks, value) {
  return callbacks.reduce((acc, callback) => callback(acc), value);
}

const addOne = function (x) {
  return x + 1;
};

const square = function (x) {
  return x * x;
};

const degree = function (x) {
  return x ** x;
};

const callbacks = [addOne, square, degree];

const result = runCallbacks(callbacks, 1);
console.log(result);

function composeFunctions (...funcs) {
  return function (value) {
    return funcs.reduceRight(function (acc, func) {
      return func(acc);
    }, value);
  };
}

const addSeven = function (x) {
  return x + 7;
};
const double = function (x) {
  return x * 2;
};
const degreeThree = function (x) {
  return x ** 3;
};

const composedFunction = composeFunctions(addSeven, double, degreeThree);
console.log(composedFunction(2));
