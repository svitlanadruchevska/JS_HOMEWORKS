'use strict';

const getFlatNumber = function (floor, building) {
  return 'Flat number ' + this.number + ' is on floor ' + floor + ' of building ' + building + '.';
};

const room = {
  number: 101
};

const getFlat101 = getFlatNumber.bind(room);

console.log(getFlat101(7, '1-A'));
