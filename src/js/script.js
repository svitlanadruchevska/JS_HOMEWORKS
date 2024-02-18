'use strict';

const myBind = function (func, context) {
  return function (...flats) {
    return func.apply(context, flats);
  };
};

const getFlatNumber = function (floor, building) {
  return 'Flat number ' + this.number + ' is on floor ' + floor + ' of building ' + building + '.';
};

const flat = {
  number: 101
};

const getFlat101 = myBind(getFlatNumber, flat);

console.log(getFlat101(7, '1-A'));
