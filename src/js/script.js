'use strict';

const arr = [1, 2, 3, -1, -2, -3];

function checkout(arr) {
    const exampleArr = [];
    if (arr.length === 0) {
        return 'Масив порожній';
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            exampleArr.push(arr[i]);
        }
    }
    return exampleArr.length > 0 ? exampleArr : null;
}

console.log(checkout(arr));
