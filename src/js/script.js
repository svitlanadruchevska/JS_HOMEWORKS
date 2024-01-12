'use strict';
function generateKey(length, characters) {
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

const randomString = prompt('Введіть будь-які символи');
const key = generateKey(10, randomString);
console.log(key);

