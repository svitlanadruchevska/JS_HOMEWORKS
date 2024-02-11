'use strict';
const randomNumGenerate = function (num = 100) {
  const usedNumbers = [];
  const selection = function () {
    const result = Math.floor(Math.random() * num) + 1;
    if (usedNumbers.includes(result)) {
      return selection();
    }
    usedNumbers.push(result);
    return result;
  };
  return selection;
};

const randomNum = randomNumGenerate();

console.log(randomNum());
