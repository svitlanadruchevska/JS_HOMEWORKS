'use strict';
const randomNumGenerate = function (num = 100) {
    let usedNumbers = [];
    const selection = function () {
        if (usedNumbers.length === num) {
            usedNumbers = [];
        }
        const result = Math.floor(Math.random() * num) + 1;
        if (usedNumbers.includes(result)) {
            return selection();
        } else {
            usedNumbers.push(result);
            return result;
        }
    }
    return selection;
}

const randomNum = randomNumGenerate();

console.log(randomNum());
