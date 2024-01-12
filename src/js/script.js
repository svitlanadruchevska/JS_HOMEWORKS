'use strict';

function generateKey(length, characters) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.random() * charactersLength;
        result += characters[randomIndex];
    }
    return result;
}

const randomString = prompt('Введіть будь-які символи');
const key = generateKey(10, randomString);
console.log(key);

