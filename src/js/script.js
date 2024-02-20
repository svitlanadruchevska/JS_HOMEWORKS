'use strict';

const flat = {
  number: 101
};
const getFlatNumber = function (floor) {
  console.log('Flat number ' + this.number + ' is on floor ' + floor + ' of building.');
};
const myBind = function (func, context, args) {
  return function () {
    context.func = func;
    context.func(args, ...args);
    delete context.func;
  };
};

const getFlat101 = myBind(getFlatNumber, flat, [7]);
getFlat101();
